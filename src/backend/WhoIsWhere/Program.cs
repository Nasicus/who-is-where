using WhoIsWhere;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration
    .AddJsonFile("appsettings.user.json", true);

builder.Services.Configure<DbSettings>(
    builder.Configuration.GetSection("DbSettings"));

builder.Services.AddCors();

builder.Services
    .AddSingleton<WhoIsWhereRepository>();

builder.Services
    .AddGraphQLServer()
    .AddDiagnosticEventListener<GraphQlErrorLogger>()
    .AddInMemorySubscriptions()
    .AddQueryType<WhoIsWhereQuery>()
    .AddMutationType<WhoIsWhereMutation>()
    .AddSubscriptionType<WhoIsWhereSubscription>();

var app = builder.Build();

app.UseRouting();

app.UseWebSockets();

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true)
    .AllowCredentials());

app.MapGraphQL();

app.Run();
