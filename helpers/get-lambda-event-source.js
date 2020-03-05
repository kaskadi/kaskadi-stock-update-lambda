module.exports = (event) => {
    if (event.Records && event.Records[0].cf) return 'isCloudfront';

    if (event.configRuleId && event.configRuleName && event.configRuleArn) return 'isAwsConfig';

    if (event.Records && (event.Records[0].eventSource === 'aws:codecommit')) return 'isCodeCommit';

    if (event.authorizationToken === "incoming-client-token") return 'isApiGatewayAuthorizer';

    if (event.StackId && event.RequestType && event.ResourceType) return 'isCloudFormation';

    if (event.Records && (event.Records[0].eventSource === 'aws:ses')) return 'isSes';

    if (event.pathParameters && event.pathParameters.proxy) return 'isApiGatewayAwsProxy';

    if (event.source === 'aws.events') return 'isScheduledEvent';

    if (event.awslogs && event.awslogs.data) return 'isCloudWatchLogs';

    if (event.Records && (event.Records[0].EventSource === 'aws:sns')) return 'isSns';

    if (event.Records && (event.Records[0].eventSource === 'aws:dynamodb')) return 'isDynamoDb';

    if (event.records && event.records[0].approximateArrivalTimestamp) return 'isKinesisFirehose';

    if (event.records && event.deliveryStreamArn && event.deliveryStreamArn.startsWith('arn:aws:kinesis:')) return 'isKinesisFirehose';

    if (event.eventType === 'SyncTrigger' && event.identityId && event.identityPoolId) return 'isCognitoSyncTrigger';

    if (event.Records && event.Records[0].eventSource === 'aws:kinesis') return 'isKinesis';

    if (event.Records && event.Records[0].eventSource === 'aws:s3') return 'isS3';

    if (event.operation && event.message) return 'isMobileBackend';

}

// see here: https://stackoverflow.com/questions/41814750/how-to-know-event-souce-of-lambda-function-in-itself?noredirect=1&lq=1
