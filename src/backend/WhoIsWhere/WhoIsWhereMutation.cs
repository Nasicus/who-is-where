using HotChocolate.Subscriptions;

namespace WhoIsWhere;

public class WhoIsWhereMutation
{
    public async Task<DayInfo> UpdateWhoIsWhere(
        string teamIdentifier,
        string day,
        string who,
        string where,
        string? id,
        string? comment,
        [Service] WhoIsWhereRepository whoIsWhereRepository,
        [Service] ITopicEventSender sender,
        CancellationToken cancellationToken = default)
    {
        var weekInfo = DateUtils.GetWeekInfo();

        var resultId = await whoIsWhereRepository.UpdateWhoIsWhere(
            id,
            teamIdentifier,
            weekInfo.Monday,
            weekInfo.Friday,
            day,
            who,
            where,
            comment,
            cancellationToken);

        await NotifySubscribers(teamIdentifier, day, who, where, sender, resultId, cancellationToken);

        return new DayInfo
        {
            Id = resultId,
            Where = where,
            Comment = comment
        };
    }

    private static async Task NotifySubscribers(
        string teamIdentifier,
        string day,
        string who,
        string where,
        ITopicEventSender sender,
        string resultId,
        CancellationToken cancellationToken) =>
        await sender.SendAsync(
            WhoIsWhereSubscription.GetSubscriptionName(teamIdentifier, who, day),
            new WhoIsWhereSubscriptionUpdate
            {
                Day = day,
                Update = new DayInfo
                {
                    Id = resultId,
                    Where = where,
                },
                MemberName = who,
            },
            cancellationToken);
}
