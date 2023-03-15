namespace WhoIsWhere;

public record DbSettings
{
    public required string ConnectionString { get; set; }
    public required string DbName { get; set; }
    public required string CollectionName { get; set; }
}
