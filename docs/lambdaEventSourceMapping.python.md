# `lambdaEventSourceMapping` Submodule <a name="`lambdaEventSourceMapping` Submodule" id="@cdktn/provider-awscc.lambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventSourceMapping <a name="LambdaEventSourceMapping" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping awscc_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig = None,
  batch_size: typing.Union[int, float] = None,
  bisect_batch_on_function_error: bool | IResolvable = None,
  destination_config: LambdaEventSourceMappingDestinationConfig = None,
  document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig = None,
  enabled: bool | IResolvable = None,
  event_source_arn: str = None,
  filter_criteria: LambdaEventSourceMappingFilterCriteria = None,
  function_response_types: typing.List[str] = None,
  kms_key_arn: str = None,
  logging_config: LambdaEventSourceMappingLoggingConfig = None,
  maximum_batching_window_in_seconds: typing.Union[int, float] = None,
  maximum_record_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  metrics_config: LambdaEventSourceMappingMetricsConfig = None,
  parallelization_factor: typing.Union[int, float] = None,
  provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig = None,
  queues: typing.List[str] = None,
  scaling_config: LambdaEventSourceMappingScalingConfig = None,
  self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource = None,
  self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig = None,
  source_access_configurations: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations] = None,
  starting_position: str = None,
  starting_position_timestamp: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[LambdaEventSourceMappingTags] = None,
  topics: typing.List[str] = None,
  tumbling_window_in_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name or ARN of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktn.IResolvable</code> | (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | Specific configuration settings for a DocumentDB event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn">event_source_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | An object that defines the filter criteria that determine whether Lambda should process an event. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues">queues</a></code> | <code>typing.List[str]</code> | (Amazon MQ) The name of the Amazon MQ broker destination queue to consume. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | This property is for Amazon SQS event sources only. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | The self-managed Apache Kafka cluster for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for a self-managed Apache Kafka event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfigurations">source_access_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]</code> | An array of the authentication protocol, VPC components, or virtual host to secure and define your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition">starting_position</a></code> | <code>str</code> | The position in a stream from which to start reading. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>typing.Union[int, float]</code> | With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]</code> | A list of tags to add to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics">topics</a></code> | <code>typing.List[str]</code> | The name of the Kafka topic. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName"></a>

- *Type:* str

The name or ARN of the Lambda function.

**Name formats**

* *Function name* – `MyFunction`.
* *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
* *Version or Alias ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
* *Partial ARN* – `123456789012:function:MyFunction`.

The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}

---

##### `amazon_managed_kafka_event_source_config`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function.

Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).

* *Amazon Kinesis* – Default 100. Max 10,000.
* *Amazon DynamoDB Streams* – Default 100. Max 10,000.
* *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
* *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
* *Self-managed Apache Kafka* – Default 100. Max 10,000.
* *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
* *DocumentDB* – Default 100. Max 10,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}

---

##### `bisect_batch_on_function_error`<sup>Optional</sup> <a name="bisect_batch_on_function_error" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError"></a>

- *Type:* bool | cdktn.IResolvable

(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.

The default value is false.
When using `BisectBatchOnFunctionError`, check the `BatchSize` parameter in the `OnFailure` destination message's metadata. The `BatchSize` could be greater than 1 since LAM consolidates failed messages metadata when writing to the `OnFailure` destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `document_db_event_source_config`<sup>Optional</sup> <a name="document_db_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.documentDbEventSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

Specific configuration settings for a DocumentDB event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}

---

##### `event_source_arn`<sup>Optional</sup> <a name="event_source_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the event source.

* *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
* *Amazon DynamoDB Streams* – The ARN of the stream.
* *Amazon Simple Queue Service* – The ARN of the queue.
* *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
* *Amazon MQ* – The ARN of the broker.
* *Amazon DocumentDB* – The ARN of the DocumentDB change stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}

---

##### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

An object that defines the filter criteria that determine whether Lambda should process an event.

For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `function_response_types`<sup>Optional</sup> <a name="function_response_types" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes"></a>

- *Type:* typing.List[str]

(Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.

Valid Values: `ReportBatchItemFailures`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source.

For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#logging_config LambdaEventSourceMapping#logging_config}

---

##### `maximum_batching_window_in_seconds`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.

*Default (, , event sources)*: 0
*Default (, Kafka, , event sources)*: 500 ms
*Related setting:* For SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}

---

##### `maximum_record_age_in_seconds`<sup>Optional</sup> <a name="maximum_record_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age.

The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries.

The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `parallelization_factor`<sup>Optional</sup> <a name="parallelization_factor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor"></a>

- *Type:* typing.Union[int, float]

(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard.

The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}

---

##### `provisioned_poller_config`<sup>Optional</sup> <a name="provisioned_poller_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisionedPollerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

(Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source.

For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues"></a>

- *Type:* typing.List[str]

(Amazon MQ) The name of the Amazon MQ broker destination queue to consume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

This property is for Amazon SQS event sources only.

You cannot use `ProvisionedPollerConfig` while using `ScalingConfig`. These options are mutually exclusive. To remove the scaling configuration, pass an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `self_managed_event_source`<sup>Optional</sup> <a name="self_managed_event_source" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

The self-managed Apache Kafka cluster for your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `self_managed_kafka_event_source_config`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

Specific configuration settings for a self-managed Apache Kafka event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `source_access_configurations`<sup>Optional</sup> <a name="source_access_configurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]

An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#source_access_configurations LambdaEventSourceMapping#source_access_configurations}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition"></a>

- *Type:* str

The position in a stream from which to start reading.

Required for Amazon Kinesis and Amazon DynamoDB.

* *LATEST* - Read only new records.
* *TRIM_HORIZON* - Process all available records.
* *AT_TIMESTAMP* - Specify a time from which to start reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}

---

##### `starting_position_timestamp`<sup>Optional</sup> <a name="starting_position_timestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp"></a>

- *Type:* typing.Union[int, float]

With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds.

`StartingPositionTimestamp` cannot be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]

A list of tags to add to the event source mapping.

You must have the `lambda:TagResource`, `lambda:UntagResource`, and `lambda:ListTags` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics"></a>

- *Type:* typing.List[str]

The name of the Kafka topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}

---

##### `tumbling_window_in_seconds`<sup>Optional</sup> <a name="tumbling_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds"></a>

- *Type:* typing.Union[int, float]

(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources.

A value of 0 seconds indicates no tumbling window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig">put_amazon_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig">put_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig">put_document_db_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria">put_filter_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig">put_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig">put_provisioned_poller_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource">put_self_managed_event_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig">put_self_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations">put_source_access_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig">reset_amazon_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError">reset_bisect_batch_on_function_error</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig">reset_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig">reset_document_db_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn">reset_event_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria">reset_filter_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes">reset_function_response_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds">reset_maximum_batching_window_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds">reset_maximum_record_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor">reset_parallelization_factor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig">reset_provisioned_poller_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues">reset_queues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig">reset_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource">reset_self_managed_event_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig">reset_self_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfigurations">reset_source_access_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition">reset_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp">reset_starting_position_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds">reset_tumbling_window_in_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_amazon_managed_kafka_event_source_config` <a name="put_amazon_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig"></a>

```python
def put_amazon_managed_kafka_event_source_config(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig = None
) -> None
```

###### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.consumerGroupId"></a>

- *Type:* str

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

###### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.schemaRegistryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

##### `put_destination_config` <a name="put_destination_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig"></a>

```python
def put_destination_config(
  on_failure: LambdaEventSourceMappingDestinationConfigOnFailure = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig.parameter.onFailure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

##### `put_document_db_event_source_config` <a name="put_document_db_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig"></a>

```python
def put_document_db_event_source_config(
  collection_name: str = None,
  database_name: str = None,
  full_document: str = None
) -> None
```

###### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.collectionName"></a>

- *Type:* str

The name of the collection to consume within the database.

If you do not specify a collection, Lambda consumes all collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.databaseName"></a>

- *Type:* str

The name of the database to consume within the DocumentDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}

---

###### `full_document`<sup>Optional</sup> <a name="full_document" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.fullDocument"></a>

- *Type:* str

Determines what DocumentDB sends to your event stream during document update operations.

If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}

---

##### `put_filter_criteria` <a name="put_filter_criteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria"></a>

```python
def put_filter_criteria(
  filters: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters] = None
) -> None
```

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]

A list of filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#filters LambdaEventSourceMapping#filters}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig"></a>

```python
def put_logging_config(
  system_log_level: str = None
) -> None
```

###### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig.parameter.systemLogLevel"></a>

- *Type:* str

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#system_log_level LambdaEventSourceMapping#system_log_level}

---

##### `put_metrics_config` <a name="put_metrics_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig"></a>

```python
def put_metrics_config(
  metrics: typing.List[str] = None
) -> None
```

###### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig.parameter.metrics"></a>

- *Type:* typing.List[str]

The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``.

* `EventCount` to receive metrics related to the number of events processed by your event source mapping.
* `ErrorCount` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
* `KafkaMetrics` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.

For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}

---

##### `put_provisioned_poller_config` <a name="put_provisioned_poller_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig"></a>

```python
def put_provisioned_poller_config(
  maximum_pollers: typing.Union[int, float] = None,
  minimum_pollers: typing.Union[int, float] = None,
  poller_group_name: str = None
) -> None
```

###### `maximum_pollers`<sup>Optional</sup> <a name="maximum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.maximumPollers"></a>

- *Type:* typing.Union[int, float]

The maximum number of event pollers this event source can scale up to.

For Amazon SQS events source mappings, default is 200, and minimum value allowed is 2. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 200, and minimum value allowed is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}

---

###### `minimum_pollers`<sup>Optional</sup> <a name="minimum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.minimumPollers"></a>

- *Type:* typing.Union[int, float]

The minimum number of event pollers this event source can scale down to.

For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}

---

###### `poller_group_name`<sup>Optional</sup> <a name="poller_group_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.pollerGroupName"></a>

- *Type:* str

(Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group.

Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#poller_group_name LambdaEventSourceMapping#poller_group_name}

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig"></a>

```python
def put_scaling_config(
  maximum_concurrency: typing.Union[int, float] = None
) -> None
```

###### `maximum_concurrency`<sup>Optional</sup> <a name="maximum_concurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig.parameter.maximumConcurrency"></a>

- *Type:* typing.Union[int, float]

Limits the number of concurrent instances that the SQS event source can invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}

---

##### `put_self_managed_event_source` <a name="put_self_managed_event_source" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource"></a>

```python
def put_self_managed_event_source(
  endpoints: LambdaEventSourceMappingSelfManagedEventSourceEndpoints = None
) -> None
```

###### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource.parameter.endpoints"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}

---

##### `put_self_managed_kafka_event_source_config` <a name="put_self_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig"></a>

```python
def put_self_managed_kafka_event_source_config(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig = None
) -> None
```

###### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.consumerGroupId"></a>

- *Type:* str

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

###### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.schemaRegistryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

##### `put_source_access_configurations` <a name="put_source_access_configurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations"></a>

```python
def put_source_access_configurations(
  value: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LambdaEventSourceMappingTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]

---

##### `reset_amazon_managed_kafka_event_source_config` <a name="reset_amazon_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig"></a>

```python
def reset_amazon_managed_kafka_event_source_config() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_bisect_batch_on_function_error` <a name="reset_bisect_batch_on_function_error" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError"></a>

```python
def reset_bisect_batch_on_function_error() -> None
```

##### `reset_destination_config` <a name="reset_destination_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig"></a>

```python
def reset_destination_config() -> None
```

##### `reset_document_db_event_source_config` <a name="reset_document_db_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig"></a>

```python
def reset_document_db_event_source_config() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_source_arn` <a name="reset_event_source_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn"></a>

```python
def reset_event_source_arn() -> None
```

##### `reset_filter_criteria` <a name="reset_filter_criteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria"></a>

```python
def reset_filter_criteria() -> None
```

##### `reset_function_response_types` <a name="reset_function_response_types" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes"></a>

```python
def reset_function_response_types() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_maximum_batching_window_in_seconds` <a name="reset_maximum_batching_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds"></a>

```python
def reset_maximum_batching_window_in_seconds() -> None
```

##### `reset_maximum_record_age_in_seconds` <a name="reset_maximum_record_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds"></a>

```python
def reset_maximum_record_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_parallelization_factor` <a name="reset_parallelization_factor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor"></a>

```python
def reset_parallelization_factor() -> None
```

##### `reset_provisioned_poller_config` <a name="reset_provisioned_poller_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig"></a>

```python
def reset_provisioned_poller_config() -> None
```

##### `reset_queues` <a name="reset_queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues"></a>

```python
def reset_queues() -> None
```

##### `reset_scaling_config` <a name="reset_scaling_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig"></a>

```python
def reset_scaling_config() -> None
```

##### `reset_self_managed_event_source` <a name="reset_self_managed_event_source" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource"></a>

```python
def reset_self_managed_event_source() -> None
```

##### `reset_self_managed_kafka_event_source_config` <a name="reset_self_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig"></a>

```python
def reset_self_managed_kafka_event_source_config() -> None
```

##### `reset_source_access_configurations` <a name="reset_source_access_configurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfigurations"></a>

```python
def reset_source_access_configurations() -> None
```

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```

##### `reset_starting_position_timestamp` <a name="reset_starting_position_timestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp"></a>

```python
def reset_starting_position_timestamp() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_tumbling_window_in_seconds` <a name="reset_tumbling_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds"></a>

```python
def reset_tumbling_window_in_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaEventSourceMapping resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaEventSourceMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaEventSourceMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaEventSourceMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventSourceMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingArn">event_source_mapping_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingId">event_source_mapping_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference">LambdaEventSourceMappingLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurations">source_access_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList">LambdaEventSourceMappingSourceAccessConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList">LambdaEventSourceMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput">amazon_managed_kafka_event_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput">bisect_batch_on_function_error_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput">destination_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput">document_db_event_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput">event_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput">filter_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput">function_response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput">maximum_batching_window_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput">maximum_record_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput">metrics_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput">parallelization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput">provisioned_poller_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput">queues_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput">scaling_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput">self_managed_event_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput">self_managed_kafka_event_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationsInput">source_access_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput">starting_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput">starting_position_timestamp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput">topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput">tumbling_window_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues">queues</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition">starting_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics">topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `amazon_managed_kafka_event_source_config`<sup>Required</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```python
amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig"></a>

```python
destination_config: LambdaEventSourceMappingDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `document_db_event_source_config`<sup>Required</sup> <a name="document_db_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig"></a>

```python
document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a>

---

##### `event_source_mapping_arn`<sup>Required</sup> <a name="event_source_mapping_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingArn"></a>

```python
event_source_mapping_arn: str
```

- *Type:* str

---

##### `event_source_mapping_id`<sup>Required</sup> <a name="event_source_mapping_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingId"></a>

```python
event_source_mapping_id: str
```

- *Type:* str

---

##### `filter_criteria`<sup>Required</sup> <a name="filter_criteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria"></a>

```python
filter_criteria: LambdaEventSourceMappingFilterCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfig"></a>

```python
logging_config: LambdaEventSourceMappingLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference">LambdaEventSourceMappingLoggingConfigOutputReference</a>

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig"></a>

```python
metrics_config: LambdaEventSourceMappingMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a>

---

##### `provisioned_poller_config`<sup>Required</sup> <a name="provisioned_poller_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig"></a>

```python
provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig"></a>

```python
scaling_config: LambdaEventSourceMappingScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `self_managed_event_source`<sup>Required</sup> <a name="self_managed_event_source" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource"></a>

```python
self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `self_managed_kafka_event_source_config`<sup>Required</sup> <a name="self_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```python
self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `source_access_configurations`<sup>Required</sup> <a name="source_access_configurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurations"></a>

```python
source_access_configurations: LambdaEventSourceMappingSourceAccessConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList">LambdaEventSourceMappingSourceAccessConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags"></a>

```python
tags: LambdaEventSourceMappingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList">LambdaEventSourceMappingTagsList</a>

---

##### `amazon_managed_kafka_event_source_config_input`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput"></a>

```python
amazon_managed_kafka_event_source_config_input: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bisect_batch_on_function_error_input`<sup>Optional</sup> <a name="bisect_batch_on_function_error_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput"></a>

```python
bisect_batch_on_function_error_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `destination_config_input`<sup>Optional</sup> <a name="destination_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput"></a>

```python
destination_config_input: IResolvable | LambdaEventSourceMappingDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `document_db_event_source_config_input`<sup>Optional</sup> <a name="document_db_event_source_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput"></a>

```python
document_db_event_source_config_input: IResolvable | LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_source_arn_input`<sup>Optional</sup> <a name="event_source_arn_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput"></a>

```python
event_source_arn_input: str
```

- *Type:* str

---

##### `filter_criteria_input`<sup>Optional</sup> <a name="filter_criteria_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput"></a>

```python
filter_criteria_input: IResolvable | LambdaEventSourceMappingFilterCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_response_types_input`<sup>Optional</sup> <a name="function_response_types_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput"></a>

```python
function_response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | LambdaEventSourceMappingLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

---

##### `maximum_batching_window_in_seconds_input`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput"></a>

```python
maximum_batching_window_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_record_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_record_age_in_seconds_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput"></a>

```python
maximum_record_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput"></a>

```python
metrics_config_input: IResolvable | LambdaEventSourceMappingMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `parallelization_factor_input`<sup>Optional</sup> <a name="parallelization_factor_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput"></a>

```python
parallelization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_poller_config_input`<sup>Optional</sup> <a name="provisioned_poller_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput"></a>

```python
provisioned_poller_config_input: IResolvable | LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `queues_input`<sup>Optional</sup> <a name="queues_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput"></a>

```python
queues_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput"></a>

```python
scaling_config_input: IResolvable | LambdaEventSourceMappingScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `self_managed_event_source_input`<sup>Optional</sup> <a name="self_managed_event_source_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput"></a>

```python
self_managed_event_source_input: IResolvable | LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `self_managed_kafka_event_source_config_input`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput"></a>

```python
self_managed_kafka_event_source_config_input: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `source_access_configurations_input`<sup>Optional</sup> <a name="source_access_configurations_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationsInput"></a>

```python
source_access_configurations_input: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput"></a>

```python
starting_position_input: str
```

- *Type:* str

---

##### `starting_position_timestamp_input`<sup>Optional</sup> <a name="starting_position_timestamp_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput"></a>

```python
starting_position_timestamp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LambdaEventSourceMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput"></a>

```python
topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tumbling_window_in_seconds_input`<sup>Optional</sup> <a name="tumbling_window_in_seconds_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput"></a>

```python
tumbling_window_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bisect_batch_on_function_error`<sup>Required</sup> <a name="bisect_batch_on_function_error" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```python
bisect_batch_on_function_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_response_types`<sup>Required</sup> <a name="function_response_types" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes"></a>

```python
function_response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `maximum_batching_window_in_seconds`<sup>Required</sup> <a name="maximum_batching_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```python
maximum_batching_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_record_age_in_seconds`<sup>Required</sup> <a name="maximum_record_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```python
maximum_record_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parallelization_factor`<sup>Required</sup> <a name="parallelization_factor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor"></a>

```python
parallelization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues"></a>

```python
queues: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

---

##### `starting_position_timestamp`<sup>Required</sup> <a name="starting_position_timestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```python
starting_position_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tumbling_window_in_seconds`<sup>Required</sup> <a name="tumbling_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```python
tumbling_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | The identifier for the Kafka consumer group to join. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | Specific configuration settings for a Kafka schema registry. |

---

##### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

##### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig(
  access_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs">access_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | An array of access configuration objects that tell Lambda how to authenticate with your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | The record format that Lambda delivers to your function after schema validation. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | The URI for your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs">schema_validation_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry. |

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs"></a>

```python
access_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

##### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

##### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

##### `schema_validation_configs`<sup>Optional</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs"></a>

```python
schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs(
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type">type</a></code> | <code>str</code> | The type of authentication Lambda uses to access your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri">uri</a></code> | <code>str</code> | The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

The type of authentication Lambda uses to access your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs(
  attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute">attribute</a></code> | <code>str</code> | The attributes you want your schema registry to validate and filter for. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The attributes you want your schema registry to validate and filter for.

If you selected `JSON` as the `EventRecordFormat`, Lambda also deserializes the selected message attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}

---

### LambdaEventSourceMappingConfig <a name="LambdaEventSourceMappingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig = None,
  batch_size: typing.Union[int, float] = None,
  bisect_batch_on_function_error: bool | IResolvable = None,
  destination_config: LambdaEventSourceMappingDestinationConfig = None,
  document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig = None,
  enabled: bool | IResolvable = None,
  event_source_arn: str = None,
  filter_criteria: LambdaEventSourceMappingFilterCriteria = None,
  function_response_types: typing.List[str] = None,
  kms_key_arn: str = None,
  logging_config: LambdaEventSourceMappingLoggingConfig = None,
  maximum_batching_window_in_seconds: typing.Union[int, float] = None,
  maximum_record_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  metrics_config: LambdaEventSourceMappingMetricsConfig = None,
  parallelization_factor: typing.Union[int, float] = None,
  provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig = None,
  queues: typing.List[str] = None,
  scaling_config: LambdaEventSourceMappingScalingConfig = None,
  self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource = None,
  self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig = None,
  source_access_configurations: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations] = None,
  starting_position: str = None,
  starting_position_timestamp: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[LambdaEventSourceMappingTags] = None,
  topics: typing.List[str] = None,
  tumbling_window_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName">function_name</a></code> | <code>str</code> | The name or ARN of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktn.IResolvable</code> | (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | Specific configuration settings for a DocumentDB event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | An object that defines the filter criteria that determine whether Lambda should process an event. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues">queues</a></code> | <code>typing.List[str]</code> | (Amazon MQ) The name of the Amazon MQ broker destination queue to consume. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | This property is for Amazon SQS event sources only. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | The self-managed Apache Kafka cluster for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for a self-managed Apache Kafka event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfigurations">source_access_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]</code> | An array of the authentication protocol, VPC components, or virtual host to secure and define your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition">starting_position</a></code> | <code>str</code> | The position in a stream from which to start reading. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>typing.Union[int, float]</code> | With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]</code> | A list of tags to add to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics">topics</a></code> | <code>typing.List[str]</code> | The name of the Kafka topic. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name or ARN of the Lambda function.

**Name formats**

* *Function name* – `MyFunction`.
* *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
* *Version or Alias ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
* *Partial ARN* – `123456789012:function:MyFunction`.

The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}

---

##### `amazon_managed_kafka_event_source_config`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig"></a>

```python
amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function.

Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).

* *Amazon Kinesis* – Default 100. Max 10,000.
* *Amazon DynamoDB Streams* – Default 100. Max 10,000.
* *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
* *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
* *Self-managed Apache Kafka* – Default 100. Max 10,000.
* *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
* *DocumentDB* – Default 100. Max 10,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}

---

##### `bisect_batch_on_function_error`<sup>Optional</sup> <a name="bisect_batch_on_function_error" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError"></a>

```python
bisect_batch_on_function_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.

The default value is false.
When using `BisectBatchOnFunctionError`, check the `BatchSize` parameter in the `OnFailure` destination message's metadata. The `BatchSize` could be greater than 1 since LAM consolidates failed messages metadata when writing to the `OnFailure` destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig"></a>

```python
destination_config: LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `document_db_event_source_config`<sup>Optional</sup> <a name="document_db_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig"></a>

```python
document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

Specific configuration settings for a DocumentDB event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}

---

##### `event_source_arn`<sup>Optional</sup> <a name="event_source_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the event source.

* *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
* *Amazon DynamoDB Streams* – The ARN of the stream.
* *Amazon Simple Queue Service* – The ARN of the queue.
* *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
* *Amazon MQ* – The ARN of the broker.
* *Amazon DocumentDB* – The ARN of the DocumentDB change stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}

---

##### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria"></a>

```python
filter_criteria: LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

An object that defines the filter criteria that determine whether Lambda should process an event.

For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `function_response_types`<sup>Optional</sup> <a name="function_response_types" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes"></a>

```python
function_response_types: typing.List[str]
```

- *Type:* typing.List[str]

(Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.

Valid Values: `ReportBatchItemFailures`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.loggingConfig"></a>

```python
logging_config: LambdaEventSourceMappingLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source.

For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#logging_config LambdaEventSourceMapping#logging_config}

---

##### `maximum_batching_window_in_seconds`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds"></a>

```python
maximum_batching_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.

*Default (, , event sources)*: 0
*Default (, Kafka, , event sources)*: 500 ms
*Related setting:* For SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}

---

##### `maximum_record_age_in_seconds`<sup>Optional</sup> <a name="maximum_record_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds"></a>

```python
maximum_record_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age.

The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries.

The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig"></a>

```python
metrics_config: LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `parallelization_factor`<sup>Optional</sup> <a name="parallelization_factor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor"></a>

```python
parallelization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard.

The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}

---

##### `provisioned_poller_config`<sup>Optional</sup> <a name="provisioned_poller_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig"></a>

```python
provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

(Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source.

For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues"></a>

```python
queues: typing.List[str]
```

- *Type:* typing.List[str]

(Amazon MQ) The name of the Amazon MQ broker destination queue to consume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig"></a>

```python
scaling_config: LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

This property is for Amazon SQS event sources only.

You cannot use `ProvisionedPollerConfig` while using `ScalingConfig`. These options are mutually exclusive. To remove the scaling configuration, pass an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `self_managed_event_source`<sup>Optional</sup> <a name="self_managed_event_source" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource"></a>

```python
self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

The self-managed Apache Kafka cluster for your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `self_managed_kafka_event_source_config`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig"></a>

```python
self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

Specific configuration settings for a self-managed Apache Kafka event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `source_access_configurations`<sup>Optional</sup> <a name="source_access_configurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfigurations"></a>

```python
source_access_configurations: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]

An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#source_access_configurations LambdaEventSourceMapping#source_access_configurations}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

The position in a stream from which to start reading.

Required for Amazon Kinesis and Amazon DynamoDB.

* *LATEST* - Read only new records.
* *TRIM_HORIZON* - Process all available records.
* *AT_TIMESTAMP* - Specify a time from which to start reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}

---

##### `starting_position_timestamp`<sup>Optional</sup> <a name="starting_position_timestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp"></a>

```python
starting_position_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds.

`StartingPositionTimestamp` cannot be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LambdaEventSourceMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]

A list of tags to add to the event source mapping.

You must have the `lambda:TagResource`, `lambda:UntagResource`, and `lambda:ListTags` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

The name of the Kafka topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}

---

##### `tumbling_window_in_seconds`<sup>Optional</sup> <a name="tumbling_window_in_seconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds"></a>

```python
tumbling_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources.

A value of 0 seconds indicates no tumbling window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}

---

### LambdaEventSourceMappingDestinationConfig <a name="LambdaEventSourceMappingDestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig(
  on_failure: LambdaEventSourceMappingDestinationConfigOnFailure = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure"></a>

```python
on_failure: LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

### LambdaEventSourceMappingDestinationConfigOnFailure <a name="LambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destination">destination</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

```python
destination: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending `OnFailure` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#destination LambdaEventSourceMapping#destination}

---

### LambdaEventSourceMappingDocumentDbEventSourceConfig <a name="LambdaEventSourceMappingDocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig(
  collection_name: str = None,
  database_name: str = None,
  full_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName">collection_name</a></code> | <code>str</code> | The name of the collection to consume within the database. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database to consume within the DocumentDB cluster. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument">full_document</a></code> | <code>str</code> | Determines what DocumentDB sends to your event stream during document update operations. |

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

The name of the collection to consume within the database.

If you do not specify a collection, Lambda consumes all collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database to consume within the DocumentDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}

---

##### `full_document`<sup>Optional</sup> <a name="full_document" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument"></a>

```python
full_document: str
```

- *Type:* str

Determines what DocumentDB sends to your event stream during document update operations.

If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}

---

### LambdaEventSourceMappingFilterCriteria <a name="LambdaEventSourceMappingFilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria(
  filters: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]</code> | A list of filters. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filters"></a>

```python
filters: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]

A list of filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#filters LambdaEventSourceMapping#filters}

---

### LambdaEventSourceMappingFilterCriteriaFilters <a name="LambdaEventSourceMappingFilterCriteriaFilters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters(
  pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.property.pattern">pattern</a></code> | <code>str</code> | A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax). |

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}

---

### LambdaEventSourceMappingLoggingConfig <a name="LambdaEventSourceMappingLoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig(
  system_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | Set this property to filter the system logs for your function that Lambda sends to CloudWatch. |

---

##### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#system_log_level LambdaEventSourceMapping#system_log_level}

---

### LambdaEventSourceMappingMetricsConfig <a name="LambdaEventSourceMappingMetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig(
  metrics: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``. |

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``.

* `EventCount` to receive metrics related to the number of events processed by your event source mapping.
* `ErrorCount` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
* `KafkaMetrics` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.

For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}

---

### LambdaEventSourceMappingProvisionedPollerConfig <a name="LambdaEventSourceMappingProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig(
  maximum_pollers: typing.Union[int, float] = None,
  minimum_pollers: typing.Union[int, float] = None,
  poller_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers">maximum_pollers</a></code> | <code>typing.Union[int, float]</code> | The maximum number of event pollers this event source can scale up to. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers">minimum_pollers</a></code> | <code>typing.Union[int, float]</code> | The minimum number of event pollers this event source can scale down to. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName">poller_group_name</a></code> | <code>str</code> | (Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. |

---

##### `maximum_pollers`<sup>Optional</sup> <a name="maximum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers"></a>

```python
maximum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of event pollers this event source can scale up to.

For Amazon SQS events source mappings, default is 200, and minimum value allowed is 2. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 200, and minimum value allowed is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}

---

##### `minimum_pollers`<sup>Optional</sup> <a name="minimum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers"></a>

```python
minimum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of event pollers this event source can scale down to.

For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}

---

##### `poller_group_name`<sup>Optional</sup> <a name="poller_group_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName"></a>

```python
poller_group_name: str
```

- *Type:* str

(Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group.

Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#poller_group_name LambdaEventSourceMapping#poller_group_name}

---

### LambdaEventSourceMappingScalingConfig <a name="LambdaEventSourceMappingScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig(
  maximum_concurrency: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | Limits the number of concurrent instances that the SQS event source can invoke. |

---

##### `maximum_concurrency`<sup>Optional</sup> <a name="maximum_concurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limits the number of concurrent instances that the SQS event source can invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}

---

### LambdaEventSourceMappingSelfManagedEventSource <a name="LambdaEventSourceMappingSelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource(
  endpoints: LambdaEventSourceMappingSelfManagedEventSourceEndpoints = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``. |

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints"></a>

```python
endpoints: LambdaEventSourceMappingSelfManagedEventSourceEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}

---

### LambdaEventSourceMappingSelfManagedEventSourceEndpoints <a name="LambdaEventSourceMappingSelfManagedEventSourceEndpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints(
  kafka_bootstrap_servers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.property.kafkaBootstrapServers">kafka_bootstrap_servers</a></code> | <code>typing.List[str]</code> | The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``. |

---

##### `kafka_bootstrap_servers`<sup>Optional</sup> <a name="kafka_bootstrap_servers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.property.kafkaBootstrapServers"></a>

```python
kafka_bootstrap_servers: typing.List[str]
```

- *Type:* typing.List[str]

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#kafka_bootstrap_servers LambdaEventSourceMapping#kafka_bootstrap_servers}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | The identifier for the Kafka consumer group to join. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | Specific configuration settings for a Kafka schema registry. |

---

##### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

##### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig(
  access_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs">access_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | An array of access configuration objects that tell Lambda how to authenticate with your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | The record format that Lambda delivers to your function after schema validation. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | The URI for your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs">schema_validation_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry. |

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs"></a>

```python
access_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

##### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

##### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

##### `schema_validation_configs`<sup>Optional</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs"></a>

```python
schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs(
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type">type</a></code> | <code>str</code> | The type of authentication Lambda uses to access your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri">uri</a></code> | <code>str</code> | The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

The type of authentication Lambda uses to access your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs(
  attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute">attribute</a></code> | <code>str</code> | The attributes you want your schema registry to validate and filter for. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The attributes you want your schema registry to validate and filter for.

If you selected `JSON` as the `EventRecordFormat`, Lambda also deserializes the selected message attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}

---

### LambdaEventSourceMappingSourceAccessConfigurations <a name="LambdaEventSourceMappingSourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations(
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.type">type</a></code> | <code>str</code> | The type of authentication protocol, VPC components, or virtual host for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.uri">uri</a></code> | <code>str</code> | The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.type"></a>

```python
type: str
```

- *Type:* str

The type of authentication protocol, VPC components, or virtual host for your event source.

For example: `"Type":"SASL_SCRAM_512_AUTH"`.

* `BASIC_AUTH` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
* `BASIC_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
* `VPC_SUBNET` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
* `VPC_SECURITY_GROUP` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
* `SASL_SCRAM_256_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
* `SASL_SCRAM_512_AUTH` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
* `VIRTUAL_HOST` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
* `CLIENT_CERTIFICATE_TLS_AUTH` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
* `SERVER_ROOT_CA_CERTIFICATE` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.uri"></a>

```python
uri: str
```

- *Type:* str

The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingTags <a name="LambdaEventSourceMappingTags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.key">key</a></code> | <code>str</code> | The key for this tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.value">value</a></code> | <code>str</code> | The value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#key LambdaEventSourceMapping#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#value LambdaEventSourceMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">put_schema_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">reset_consumer_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">reset_schema_registry_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_registry_config` <a name="put_schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```python
def put_schema_registry_config(
  access_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs] = None
) -> None
```

###### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.accessConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

###### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.eventRecordFormat"></a>

- *Type:* str

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

###### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaRegistryUri"></a>

- *Type:* str

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

###### `schema_validation_configs`<sup>Optional</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaValidationConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

##### `reset_consumer_group_id` <a name="reset_consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```python
def reset_consumer_group_id() -> None
```

##### `reset_schema_registry_config` <a name="reset_schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```python
def reset_schema_registry_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">schema_registry_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_registry_config`<sup>Required</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `consumer_group_id_input`<sup>Optional</sup> <a name="consumer_group_id_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```python
consumer_group_id_input: str
```

- *Type:* str

---

##### `schema_registry_config_input`<sup>Optional</sup> <a name="schema_registry_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```python
schema_registry_config_input: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `consumer_group_id`<sup>Required</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs">put_schema_validation_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">reset_event_record_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">reset_schema_registry_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs">reset_schema_validation_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---

##### `put_schema_validation_configs` <a name="put_schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs"></a>

```python
def put_schema_validation_configs(
  value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_event_record_format` <a name="reset_event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```python
def reset_event_record_format() -> None
```

##### `reset_schema_registry_uri` <a name="reset_schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```python
def reset_schema_registry_uri() -> None
```

##### `reset_schema_validation_configs` <a name="reset_schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs"></a>

```python
def reset_schema_validation_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">schema_validation_configs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">event_record_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">schema_registry_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput">schema_validation_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```python
access_configs: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `schema_validation_configs`<sup>Required</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```python
schema_validation_configs: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---

##### `event_record_format_input`<sup>Optional</sup> <a name="event_record_format_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```python
event_record_format_input: str
```

- *Type:* str

---

##### `schema_registry_uri_input`<sup>Optional</sup> <a name="schema_registry_uri_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```python
schema_registry_uri_input: str
```

- *Type:* str

---

##### `schema_validation_configs_input`<sup>Optional</sup> <a name="schema_validation_configs_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput"></a>

```python
schema_validation_configs_input: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---

##### `event_record_format`<sup>Required</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

---

##### `schema_registry_uri`<sup>Required</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### LambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="LambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### LambdaEventSourceMappingDestinationConfigOutputReference <a name="LambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure.parameter.destination"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending `OnFailure` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#destination LambdaEventSourceMapping#destination}

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```python
on_failure: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput"></a>

```python
on_failure_input: IResolvable | LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---


### LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference <a name="LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument">reset_full_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_full_document` <a name="reset_full_document" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument"></a>

```python
def reset_full_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput">full_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument">full_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `full_document_input`<sup>Optional</sup> <a name="full_document_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput"></a>

```python
full_document_input: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `full_document`<sup>Required</sup> <a name="full_document" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument"></a>

```python
full_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---


### LambdaEventSourceMappingFilterCriteriaFiltersList <a name="LambdaEventSourceMappingFilterCriteriaFiltersList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingFilterCriteriaFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]

---


### LambdaEventSourceMappingFilterCriteriaFiltersOutputReference <a name="LambdaEventSourceMappingFilterCriteriaFiltersOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pattern` <a name="reset_pattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingFilterCriteriaFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>

---


### LambdaEventSourceMappingFilterCriteriaOutputReference <a name="LambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilters">reset_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]

---

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList">LambdaEventSourceMappingFilterCriteriaFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filters"></a>

```python
filters: LambdaEventSourceMappingFilterCriteriaFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList">LambdaEventSourceMappingFilterCriteriaFiltersList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingFilterCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---


### LambdaEventSourceMappingLoggingConfigOutputReference <a name="LambdaEventSourceMappingLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resetSystemLogLevel">reset_system_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_log_level` <a name="reset_system_log_level" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resetSystemLogLevel"></a>

```python
def reset_system_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevelInput">system_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_log_level_input`<sup>Optional</sup> <a name="system_log_level_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```python
system_log_level_input: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

---


### LambdaEventSourceMappingMetricsConfigOutputReference <a name="LambdaEventSourceMappingMetricsConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics` <a name="reset_metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingMetricsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---


### LambdaEventSourceMappingProvisionedPollerConfigOutputReference <a name="LambdaEventSourceMappingProvisionedPollerConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers">reset_maximum_pollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers">reset_minimum_pollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName">reset_poller_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_pollers` <a name="reset_maximum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers"></a>

```python
def reset_maximum_pollers() -> None
```

##### `reset_minimum_pollers` <a name="reset_minimum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers"></a>

```python
def reset_minimum_pollers() -> None
```

##### `reset_poller_group_name` <a name="reset_poller_group_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName"></a>

```python
def reset_poller_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput">maximum_pollers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput">minimum_pollers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput">poller_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers">maximum_pollers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers">minimum_pollers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName">poller_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_pollers_input`<sup>Optional</sup> <a name="maximum_pollers_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput"></a>

```python
maximum_pollers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_pollers_input`<sup>Optional</sup> <a name="minimum_pollers_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput"></a>

```python
minimum_pollers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `poller_group_name_input`<sup>Optional</sup> <a name="poller_group_name_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput"></a>

```python
poller_group_name_input: str
```

- *Type:* str

---

##### `maximum_pollers`<sup>Required</sup> <a name="maximum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers"></a>

```python
maximum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_pollers`<sup>Required</sup> <a name="minimum_pollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers"></a>

```python
minimum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `poller_group_name`<sup>Required</sup> <a name="poller_group_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName"></a>

```python
poller_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---


### LambdaEventSourceMappingScalingConfigOutputReference <a name="LambdaEventSourceMappingScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency">reset_maximum_concurrency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_concurrency` <a name="reset_maximum_concurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency"></a>

```python
def reset_maximum_concurrency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput">maximum_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_concurrency_input`<sup>Optional</sup> <a name="maximum_concurrency_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput"></a>

```python
maximum_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency`<sup>Required</sup> <a name="maximum_concurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resetKafkaBootstrapServers">reset_kafka_bootstrap_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kafka_bootstrap_servers` <a name="reset_kafka_bootstrap_servers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resetKafkaBootstrapServers"></a>

```python
def reset_kafka_bootstrap_servers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServersInput">kafka_bootstrap_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers">kafka_bootstrap_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kafka_bootstrap_servers_input`<sup>Optional</sup> <a name="kafka_bootstrap_servers_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServersInput"></a>

```python
kafka_bootstrap_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kafka_bootstrap_servers`<sup>Required</sup> <a name="kafka_bootstrap_servers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers"></a>

```python
kafka_bootstrap_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedEventSourceEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints">put_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resetEndpoints">reset_endpoints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_endpoints` <a name="put_endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints"></a>

```python
def put_endpoints(
  kafka_bootstrap_servers: typing.List[str] = None
) -> None
```

###### `kafka_bootstrap_servers`<sup>Optional</sup> <a name="kafka_bootstrap_servers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints.parameter.kafkaBootstrapServers"></a>

- *Type:* typing.List[str]

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#kafka_bootstrap_servers LambdaEventSourceMapping#kafka_bootstrap_servers}

---

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput">endpoints_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```python
endpoints: LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a>

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput"></a>

```python
endpoints_input: IResolvable | LambdaEventSourceMappingSelfManagedEventSourceEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">put_schema_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">reset_consumer_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">reset_schema_registry_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_registry_config` <a name="put_schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```python
def put_schema_registry_config(
  access_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_configs: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs] = None
) -> None
```

###### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.accessConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

###### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.eventRecordFormat"></a>

- *Type:* str

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

###### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaRegistryUri"></a>

- *Type:* str

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

###### `schema_validation_configs`<sup>Optional</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaValidationConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

##### `reset_consumer_group_id` <a name="reset_consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```python
def reset_consumer_group_id() -> None
```

##### `reset_schema_registry_config` <a name="reset_schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```python
def reset_schema_registry_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">schema_registry_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_registry_config`<sup>Required</sup> <a name="schema_registry_config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `consumer_group_id_input`<sup>Optional</sup> <a name="consumer_group_id_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```python
consumer_group_id_input: str
```

- *Type:* str

---

##### `schema_registry_config_input`<sup>Optional</sup> <a name="schema_registry_config_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```python
schema_registry_config_input: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `consumer_group_id`<sup>Required</sup> <a name="consumer_group_id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs">put_schema_validation_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">reset_event_record_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">reset_schema_registry_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs">reset_schema_validation_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---

##### `put_schema_validation_configs` <a name="put_schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs"></a>

```python
def put_schema_validation_configs(
  value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_event_record_format` <a name="reset_event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```python
def reset_event_record_format() -> None
```

##### `reset_schema_registry_uri` <a name="reset_schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```python
def reset_schema_registry_uri() -> None
```

##### `reset_schema_validation_configs` <a name="reset_schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs"></a>

```python
def reset_schema_validation_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">schema_validation_configs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">event_record_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">schema_registry_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput">schema_validation_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```python
access_configs: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `schema_validation_configs`<sup>Required</sup> <a name="schema_validation_configs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```python
schema_validation_configs: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>]

---

##### `event_record_format_input`<sup>Optional</sup> <a name="event_record_format_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```python
event_record_format_input: str
```

- *Type:* str

---

##### `schema_registry_uri_input`<sup>Optional</sup> <a name="schema_registry_uri_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```python
schema_registry_uri_input: str
```

- *Type:* str

---

##### `schema_validation_configs_input`<sup>Optional</sup> <a name="schema_validation_configs_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput"></a>

```python
schema_validation_configs_input: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---

##### `event_record_format`<sup>Required</sup> <a name="event_record_format" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

---

##### `schema_registry_uri`<sup>Required</sup> <a name="schema_registry_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### LambdaEventSourceMappingSourceAccessConfigurationsList <a name="LambdaEventSourceMappingSourceAccessConfigurationsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSourceAccessConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>]

---


### LambdaEventSourceMappingSourceAccessConfigurationsOutputReference <a name="LambdaEventSourceMappingSourceAccessConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSourceAccessConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>

---


### LambdaEventSourceMappingTagsList <a name="LambdaEventSourceMappingTagsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>]

---


### LambdaEventSourceMappingTagsOutputReference <a name="LambdaEventSourceMappingTagsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>

---



