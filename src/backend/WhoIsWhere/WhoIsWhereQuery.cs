namespace WhoIsWhere;

public class WhoIsWhereQuery
{
    public async Task<WhoIsWhereQueryResult> GetWhoIsWhere(
        string teamIdentifier,
        [Service] WhoIsWhereRepository whoIsWhereRepository,
        CancellationToken cancellationToken = default)
    {
        var weekInfo = DateUtils.GetWeekInfo();

        return new WhoIsWhereQueryResult
        {
            WeekInfo = weekInfo,
            TeamIdentifier = teamIdentifier,
            WhoIsWhere = await whoIsWhereRepository.GetWhoIsWhere(
                teamIdentifier,
                weekInfo.Monday,
                weekInfo.Friday,
                cancellationToken),
        };
    }
}

public class WhoIsWhereQueryResult
{
    public required WeekInfo WeekInfo { get; set; }
    public required string TeamIdentifier { get; set; }
    public required IReadOnlyList<WhoIsWhere> WhoIsWhere { get; set; }
}
