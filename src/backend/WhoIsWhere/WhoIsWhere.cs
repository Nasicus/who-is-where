namespace WhoIsWhere;

public record WhoIsWhere
{
    public required string MemberName { get; set; }
    public DayInfo? Monday { get; set; }
    public DayInfo? Tuesday { get; set; }
    public DayInfo? Wednesday { get; set; }
    public DayInfo? Thursday { get; set; }
    public DayInfo? Friday { get; set; }
}

public record DayInfo
{
    public required string Id { get; set; }
    public required string Where { get; set; }
    public string? Comment { get; set; }
}
