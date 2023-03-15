namespace WhoIsWhere.Test;

public class DateUtilsTests
{
    [Test]
    [TestCase("2023-03-06Z")]
    [TestCase("2023-03-07Z")]
    [TestCase("2023-03-08Z")]
    [TestCase("2023-03-09Z")]
    [TestCase("2023-03-10Z")]
    [TestCase("2023-03-11Z")]
    [TestCase("2023-03-12Z")]
    [TestCase("2023-03-06 23:59Z")]
    [TestCase("2023-03-07 23:59Z")]
    [TestCase("2023-03-08 23:59Z")]
    [TestCase("2023-03-09 23:59Z")]
    [TestCase("2023-03-10 23:59Z")]
    [TestCase("2023-03-11 23:59Z")]
    [TestCase("2023-03-12 23:59Z")]
    [TestCase("2023-03-06 00:00Z")]
    [TestCase("2023-03-07 00:00Z")]
    [TestCase("2023-03-08 00:00Z")]
    [TestCase("2023-03-09 00:00Z")]
    [TestCase("2023-03-10 00:00Z")]
    [TestCase("2023-03-11 00:00Z")]
    [TestCase("2023-03-12 00:00Z")]
    public void GetCurrentMonday_ShouldReturnCurrentMonday(string date)
    {
        // arrange
        var dateTime = DateTime.Parse(date).ToUniversalTime();

        // act
        var monday = DateUtils.GetCurrentMonday(dateTime);

        // assert
        Assert.That(monday, Is.EqualTo(DateOnly.Parse("2023-03-06")));
    }

    [Test]
    [TestCase("2023-03-06Z")]
    [TestCase("2023-03-07Z")]
    [TestCase("2023-03-08Z")]
    [TestCase("2023-03-09Z")]
    [TestCase("2023-03-10Z")]
    [TestCase("2023-03-11Z")]
    [TestCase("2023-03-12Z")]
    [TestCase("2023-03-06 23:59Z")]
    [TestCase("2023-03-07 23:59Z")]
    [TestCase("2023-03-08 23:59Z")]
    [TestCase("2023-03-09 23:59Z")]
    [TestCase("2023-03-10 23:59Z")]
    [TestCase("2023-03-11 23:59Z")]
    [TestCase("2023-03-12 23:59Z")]
    [TestCase("2023-03-06 00:00Z")]
    [TestCase("2023-03-07 00:00Z")]
    [TestCase("2023-03-08 00:00Z")]
    [TestCase("2023-03-09 00:00Z")]
    [TestCase("2023-03-10 00:00Z")]
    [TestCase("2023-03-11 00:00Z")]
    [TestCase("2023-03-12 00:00Z")]
    public void GetCurrentFriday_ShouldReturnCurrentFriday(string date)
    {
        // arrange
        var dateTime = DateTime.Parse(date).ToUniversalTime();

        // act
        var monday = DateUtils.GetCurrentFriday(dateTime);

        // assert
        Assert.That(monday, Is.EqualTo(DateOnly.Parse("2023-03-10")));
    }

    [Test]
    [TestCase("2023-03-06Z")]
    [TestCase("2023-03-07Z")]
    [TestCase("2023-03-08Z")]
    [TestCase("2023-03-09Z")]
    [TestCase("2023-03-10Z")]
    [TestCase("2023-03-11Z")]
    [TestCase("2023-03-12Z")]
    [TestCase("2023-03-06 23:59Z")]
    [TestCase("2023-03-07 23:59Z")]
    [TestCase("2023-03-08 23:59Z")]
    [TestCase("2023-03-09 23:59Z")]
    [TestCase("2023-03-10 23:59Z")]
    [TestCase("2023-03-11 23:59Z")]
    [TestCase("2023-03-12 23:59Z")]
    [TestCase("2023-03-06 00:00Z")]
    [TestCase("2023-03-07 00:00Z")]
    [TestCase("2023-03-08 00:00Z")]
    [TestCase("2023-03-09 00:00Z")]
    [TestCase("2023-03-10 00:00Z")]
    [TestCase("2023-03-11 00:00Z")]
    [TestCase("2023-03-12 00:00Z")]
    public void GetNextMonday_ShouldReturnNextMonday(string date)
    {
        // arrange
        var dateTime = DateTime.Parse(date).ToUniversalTime();

        // act
        var monday = DateUtils.GetNextMonday(dateTime);

        // assert
        Assert.That(monday, Is.EqualTo(DateOnly.Parse("2023-03-13")));
    }

    [Test]
    [TestCase("2023-03-06Z")]
    [TestCase("2023-03-07Z")]
    [TestCase("2023-03-08Z")]
    [TestCase("2023-03-09Z")]
    [TestCase("2023-03-10Z")]
    [TestCase("2023-03-11Z")]
    [TestCase("2023-03-12Z")]
    [TestCase("2023-03-06 23:59Z")]
    [TestCase("2023-03-07 23:59Z")]
    [TestCase("2023-03-08 23:59Z")]
    [TestCase("2023-03-09 23:59Z")]
    [TestCase("2023-03-10 23:59Z")]
    [TestCase("2023-03-11 23:59Z")]
    [TestCase("2023-03-12 23:59Z")]
    [TestCase("2023-03-06 00:00Z")]
    [TestCase("2023-03-07 00:00Z")]
    [TestCase("2023-03-08 00:00Z")]
    [TestCase("2023-03-09 00:00Z")]
    [TestCase("2023-03-10 00:00Z")]
    [TestCase("2023-03-11 00:00Z")]
    [TestCase("2023-03-12 00:00Z")]
    public void GetNextFriday_ShouldReturnNextFriday(string date)
    {
        // arrange
        var dateTime = DateTime.Parse(date).ToUniversalTime();

        // act
        var monday = DateUtils.GetNextFriday(dateTime);

        // assert
        Assert.That(monday, Is.EqualTo(DateOnly.Parse("2023-03-17")));
    }
}
