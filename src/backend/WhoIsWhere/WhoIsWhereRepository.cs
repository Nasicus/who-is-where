using System.Security.Authentication;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace WhoIsWhere;

public class WhoIsWhereRepository
{
    private readonly IMongoCollection<WhoIsWhereDb> whoIsWhereCollection;

    public WhoIsWhereRepository(IOptions<DbSettings> dbSettings)
    {
        var settings = MongoClientSettings.FromUrl(new MongoUrl(dbSettings.Value.ConnectionString));

        settings.SslSettings =
            new SslSettings
            {
                EnabledSslProtocols = SslProtocols.Tls12,
            };

        var mongoClient = new MongoClient(settings);
        var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DbName);

        whoIsWhereCollection = mongoDatabase.GetCollection<WhoIsWhereDb>(dbSettings.Value.CollectionName);
    }

    public async Task<IReadOnlyList<WhoIsWhere>> GetWhoIsWhere(
        string teamIdentifier,
        DateOnly startDate,
        DateOnly endDate,
        CancellationToken cancellationToken = default)
    {
        var b = Builders<WhoIsWhereDb>.Filter;
        var result = await (await whoIsWhereCollection.FindAsync(
                b.Eq(f => f.TeamId, teamIdentifier) & b.Eq(f => f.StartDate, startDate) & b.Eq(f => f.EndDate, endDate),
                null,
                cancellationToken))
            .ToListAsync(cancellationToken);

        return result.GroupBy(e => e.Who, e => e)
            .Select(
                who => new WhoIsWhere
                {
                    MemberName = who.Key,
                    Monday = GetDay("Monday", who),
                    Tuesday = GetDay("Tuesday", who),
                    Wednesday = GetDay("Wednesday", who),
                    Thursday = GetDay("Thursday", who),
                    Friday = GetDay("Friday", who),
                })
            .ToArray();
    }

    private static DayInfo? GetDay(string day, IEnumerable<WhoIsWhereDb> who)
    {
        var result = who.FirstOrDefault(w => w.Day == day);
        if (result == null)
        {
            return null;
        }

        return new DayInfo
        {
            Id = result.Id!,
            Where = result.Where,
            Comment = result.Comment,
        };
    }

    public async Task<string> UpdateWhoIsWhere(
        string? id,
        string teamIdentifier,
        DateOnly startDate,
        DateOnly endDate,
        string day,
        string who,
        string where,
        string? comment,
        CancellationToken cancellationToken)
    {
        var b = Builders<WhoIsWhereDb>.Filter;

        var result = await whoIsWhereCollection.FindOneAndReplaceAsync(
            b.Eq(f => f.Id, id ?? ObjectId.GenerateNewId().ToString()),
            new WhoIsWhereDb
            {
                TeamId = teamIdentifier,
                StartDate = startDate,
                EndDate = endDate,
                Day = day,
                Who = who,
                Where = where,
                Comment = comment,
            },
            new FindOneAndReplaceOptions<WhoIsWhereDb>
            {
                IsUpsert = true,
                ReturnDocument = ReturnDocument.After,
            },
            cancellationToken);

        return id ?? result.Id!;
    }

    public record WhoIsWhereDb
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonIgnoreIfDefault]
        public string? Id { get; set; }

        public required string TeamId { get; set; }
        public required DateOnly StartDate { get; set; }
        public required DateOnly EndDate { get; set; }
        public required string Day { get; set; }
        public required string Who { get; set; }
        public required string Where { get; set; }
        public string? Comment { get; set; }
    }
}
