using HotChocolate.Execution;
using HotChocolate.Execution.Instrumentation;
using HotChocolate.Execution.Processing;
using HotChocolate.Resolvers;

namespace WhoIsWhere;

public class GraphQlErrorLogger : ExecutionDiagnosticEventListener
{
    private readonly ILogger<GraphQlErrorLogger> logger;

    public GraphQlErrorLogger(ILogger<GraphQlErrorLogger> logger) => this.logger = logger;

    public override void ResolverError(
        IMiddlewareContext context,
        IError error)
    {
        logger.LogError(error.Exception, error.Message);
    }

    public override void TaskError(
        IExecutionTask task,
        IError error)
    {
        logger.LogError(error.Exception, error.Message);
    }

    public override void RequestError(
        IRequestContext context,
        Exception exception)
    {
        logger.LogError(exception, "RequestError");
    }

    public override void SubscriptionEventError(
        SubscriptionEventContext context,
        Exception exception)
    {
        logger.LogError(exception, "SubscriptionEventError");
    }

    public override void SubscriptionTransportError(
        ISubscription subscription,
        Exception exception)
    {
        logger.LogError(exception, "SubscriptionTransportError");
    }
}
