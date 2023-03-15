namespace WhoIsWhere;

public class WhoIsWhereSubscription
{
    [Subscribe]
    [Topic("WhoIsWhereUpdated_{teamIdentifier}_{who}_{day}")]
    public WhoIsWhereSubscriptionUpdate WhoIsWhereUpdated(
        string teamIdentifier,
        string who,
        string day,
        [EventMessage] WhoIsWhereSubscriptionUpdate update) =>
        update;

    public static string GetSubscriptionName(string teamIdentifier, string who, string day) =>
        $"WhoIsWhereUpdated_{teamIdentifier}_{who}_{day}";
}

public record WhoIsWhereSubscriptionUpdate
{
    public required string MemberName { get; set; }
    public required string Day { get; set; }
    public required DayInfo Update { get; set; }
}
