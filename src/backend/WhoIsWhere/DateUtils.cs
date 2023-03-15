namespace WhoIsWhere;

public static class DateUtils
{
    public static DateOnly GetCurrentMonday(DateTime time)
    {
        return DateOnly.FromDateTime(time.Date - TimeSpan.FromDays(GetDayOfWeek(time) - 1));
    }

    public static DateOnly GetCurrentFriday(DateTime time)
    {
        return DateOnly.FromDateTime(time.Date + TimeSpan.FromDays(5 - GetDayOfWeek(time)));
    }

    public static DateOnly GetNextMonday(DateTime time)
    {
        var currentMonday = GetCurrentMonday(time);
        return DateOnly.FromDateTime(currentMonday.ToDateTime(TimeOnly.MinValue) + TimeSpan.FromDays(7));
    }

    public static DateOnly GetNextFriday(DateTime time)
    {
        return DateOnly.FromDateTime(GetCurrentFriday(time).ToDateTime(TimeOnly.MinValue) + TimeSpan.FromDays(7));
    }

    public static WeekInfo GetWeekInfo()
    {
        var now = DateTime.UtcNow;
        var isCurrentWeek = now.DayOfWeek < DayOfWeek.Friday
                            || (now.DayOfWeek == DayOfWeek.Friday && now.TimeOfDay < TimeSpan.FromHours(9));

        return new WeekInfo
        {
            IsCurrentWeek = isCurrentWeek,
            Monday = isCurrentWeek ? GetCurrentMonday(now) : GetNextMonday(now),
            Friday = isCurrentWeek ? GetCurrentFriday(now) : GetNextFriday(now),
        };
    }

    private static int GetDayOfWeek(DateTime time)
    {
        return time.DayOfWeek != DayOfWeek.Sunday ? (int)time.DayOfWeek : 7;
    }
}
