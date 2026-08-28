# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktn/provider-awscc.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue awscc_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content_based_deduplication: bool | IResolvable = None,
  deduplication_scope: str = None,
  delay_seconds: typing.Union[int, float] = None,
  fifo_queue: bool | IResolvable = None,
  fifo_throughput_limit: str = None,
  kms_data_key_reuse_period_seconds: typing.Union[int, float] = None,
  kms_master_key_id: str = None,
  maximum_message_size: typing.Union[int, float] = None,
  message_retention_period: typing.Union[int, float] = None,
  queue_name: str = None,
  receive_message_wait_time_seconds: typing.Union[int, float] = None,
  redrive_allow_policy: str = None,
  redrive_policy: str = None,
  sqs_managed_sse_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SqsQueueTags] = None,
  visibility_timeout: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | The time in seconds for which the delivery of all messages in the queue is delayed. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue">fifo_queue</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, creates a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.maximumMessageSize">maximum_message_size</a></code> | <code>typing.Union[int, float]</code> | The limit of how many bytes that a message can contain before SQS rejects it. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionPeriod">message_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that SQS retains a message. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.queueName">queue_name</a></code> | <code>str</code> | A name for the queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.receiveMessageWaitTimeSeconds">receive_message_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy">redrive_policy</a></code> | <code>str</code> | The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables server-side queue encryption using SQS owned encryption keys. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]</code> | The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeout">visibility_timeout</a></code> | <code>typing.Union[int, float]</code> | The length of time during which a message will be unavailable after a message is delivered from the queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* bool | cdktn.IResolvable

For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication.

During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the `ContentBasedDeduplication` attribute for the `CreateQueue` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}

---

##### `deduplication_scope`<sup>Optional</sup> <a name="deduplication_scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope"></a>

- *Type:* str

For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level.

Valid values are `messageGroup` and `queue`.
To enable high throughput for a FIFO queue, set this attribute to `messageGroup`*and* set the `FifoThroughputLimit` attribute to `perMessageGroupId`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}

---

##### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds"></a>

- *Type:* typing.Union[int, float]

The time in seconds for which the delivery of all messages in the queue is delayed.

You can specify an integer value of `0` to `900` (15 minutes). The default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}

---

##### `fifo_queue`<sup>Optional</sup> <a name="fifo_queue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, creates a FIFO queue.

If you don't specify this property, SQS creates a standard queue. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}

---

##### `fifo_throughput_limit`<sup>Optional</sup> <a name="fifo_throughput_limit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit"></a>

- *Type:* str

For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group.

Valid values are `perQueue` and `perMessageGroupId`.
To enable high throughput for a FIFO queue, set this attribute to `perMessageGroupId`*and* set the `DeduplicationScope` attribute to `messageGroup`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}

---

##### `kms_data_key_reuse_period_seconds`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds"></a>

- *Type:* typing.Union[int, float]

The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.

The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* str

The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS.

To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example `alias/aws/sqs`), key ARN, or key ID. For more information, see the following:

* [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the *Developer Guide*
* [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) in the *API Reference*
* [Request Parameters](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*
* The Key Management Service (KMS) section of the [Security best practices for Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the *Key Management Service Developer Guide*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}

---

##### `maximum_message_size`<sup>Optional</sup> <a name="maximum_message_size" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.maximumMessageSize"></a>

- *Type:* typing.Union[int, float]

The limit of how many bytes that a message can contain before SQS rejects it.

You can specify an integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#maximum_message_size SqsQueue#maximum_message_size}

---

##### `message_retention_period`<sup>Optional</sup> <a name="message_retention_period" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of seconds that SQS retains a message.

You can specify an integer value from `60` seconds (1 minute) to `1,209,600` seconds (14 days). The default value is `345,600` seconds (4 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#message_retention_period SqsQueue#message_retention_period}

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.queueName"></a>

- *Type:* str

A name for the queue.

To create a FIFO queue, the name of your FIFO queue must end with the `.fifo` suffix. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the *User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#queue_name SqsQueue#queue_name}

---

##### `receive_message_wait_time_seconds`<sup>Optional</sup> <a name="receive_message_wait_time_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.receiveMessageWaitTimeSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available.

You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#receive_message_wait_time_seconds SqsQueue#receive_message_wait_time_seconds}

---

##### `redrive_allow_policy`<sup>Optional</sup> <a name="redrive_allow_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy"></a>

- *Type:* str

The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object.

The parameters are as follows:

* `redrivePermission`: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
* `allowAll`: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
* `denyAll`: No source queues can specify this queue as the dead-letter queue.
* `byQueue`: Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
* `sourceQueueArns`: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy"></a>

- *Type:* str

The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object.

The parameters are as follows:

* `deadLetterTargetArn`: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of `maxReceiveCount` is exceeded.
* `maxReceiveCount`: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, SQS moves the message to the dead-letter-queue.

The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
*JSON*
`{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`
*YAML*
`deadLetterTargetArn : String`
`maxReceiveCount : Integer`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}

---

##### `sqs_managed_sse_enabled`<sup>Optional</sup> <a name="sqs_managed_sse_enabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables server-side queue encryption using SQS owned encryption keys.

Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When `SqsManagedSseEnabled` is not defined, `SSE-SQS` encryption is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]

The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#tags SqsQueue#tags}

---

##### `visibility_timeout`<sup>Optional</sup> <a name="visibility_timeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeout"></a>

- *Type:* typing.Union[int, float]

The length of time during which a message will be unavailable after a message is delivered from the queue.

This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
For more information about SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#visibility_timeout SqsQueue#visibility_timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication">reset_content_based_deduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope">reset_deduplication_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds">reset_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue">reset_fifo_queue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit">reset_fifo_throughput_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">reset_kms_data_key_reuse_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize">reset_maximum_message_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod">reset_message_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName">reset_queue_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds">reset_receive_message_wait_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy">reset_redrive_allow_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy">reset_redrive_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">reset_sqs_managed_sse_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout">reset_visibility_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SqsQueueTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]

---

##### `reset_content_based_deduplication` <a name="reset_content_based_deduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```python
def reset_content_based_deduplication() -> None
```

##### `reset_deduplication_scope` <a name="reset_deduplication_scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```python
def reset_deduplication_scope() -> None
```

##### `reset_delay_seconds` <a name="reset_delay_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```python
def reset_delay_seconds() -> None
```

##### `reset_fifo_queue` <a name="reset_fifo_queue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue"></a>

```python
def reset_fifo_queue() -> None
```

##### `reset_fifo_throughput_limit` <a name="reset_fifo_throughput_limit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```python
def reset_fifo_throughput_limit() -> None
```

##### `reset_kms_data_key_reuse_period_seconds` <a name="reset_kms_data_key_reuse_period_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```python
def reset_kms_data_key_reuse_period_seconds() -> None
```

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_maximum_message_size` <a name="reset_maximum_message_size" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize"></a>

```python
def reset_maximum_message_size() -> None
```

##### `reset_message_retention_period` <a name="reset_message_retention_period" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod"></a>

```python
def reset_message_retention_period() -> None
```

##### `reset_queue_name` <a name="reset_queue_name" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName"></a>

```python
def reset_queue_name() -> None
```

##### `reset_receive_message_wait_time_seconds` <a name="reset_receive_message_wait_time_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds"></a>

```python
def reset_receive_message_wait_time_seconds() -> None
```

##### `reset_redrive_allow_policy` <a name="reset_redrive_allow_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```python
def reset_redrive_allow_policy() -> None
```

##### `reset_redrive_policy` <a name="reset_redrive_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```python
def reset_redrive_policy() -> None
```

##### `reset_sqs_managed_sse_enabled` <a name="reset_sqs_managed_sse_enabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```python
def reset_sqs_managed_sse_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_visibility_timeout` <a name="reset_visibility_timeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout"></a>

```python
def reset_visibility_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqsQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">content_based_deduplication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplication_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput">delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput">fifo_queue_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifo_throughput_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kms_data_key_reuse_period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput">maximum_message_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput">message_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput">receive_message_wait_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redrive_allow_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput">redrive_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqs_managed_sse_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput">visibility_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue">fifo_queue</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize">maximum_message_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod">message_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds">receive_message_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout">visibility_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags"></a>

```python
tags: SqsQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a>

---

##### `content_based_deduplication_input`<sup>Optional</sup> <a name="content_based_deduplication_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```python
content_based_deduplication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deduplication_scope_input`<sup>Optional</sup> <a name="deduplication_scope_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```python
deduplication_scope_input: str
```

- *Type:* str

---

##### `delay_seconds_input`<sup>Optional</sup> <a name="delay_seconds_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```python
delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fifo_queue_input`<sup>Optional</sup> <a name="fifo_queue_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```python
fifo_queue_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fifo_throughput_limit_input`<sup>Optional</sup> <a name="fifo_throughput_limit_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```python
fifo_throughput_limit_input: str
```

- *Type:* str

---

##### `kms_data_key_reuse_period_seconds_input`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```python
kms_data_key_reuse_period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `maximum_message_size_input`<sup>Optional</sup> <a name="maximum_message_size_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput"></a>

```python
maximum_message_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_retention_period_input`<sup>Optional</sup> <a name="message_retention_period_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput"></a>

```python
message_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `receive_message_wait_time_seconds_input`<sup>Optional</sup> <a name="receive_message_wait_time_seconds_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput"></a>

```python
receive_message_wait_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redrive_allow_policy_input`<sup>Optional</sup> <a name="redrive_allow_policy_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```python
redrive_allow_policy_input: str
```

- *Type:* str

---

##### `redrive_policy_input`<sup>Optional</sup> <a name="redrive_policy_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```python
redrive_policy_input: str
```

- *Type:* str

---

##### `sqs_managed_sse_enabled_input`<sup>Optional</sup> <a name="sqs_managed_sse_enabled_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```python
sqs_managed_sse_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SqsQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]

---

##### `visibility_timeout_input`<sup>Optional</sup> <a name="visibility_timeout_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput"></a>

```python
visibility_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_based_deduplication`<sup>Required</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deduplication_scope`<sup>Required</sup> <a name="deduplication_scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```python
deduplication_scope: str
```

- *Type:* str

---

##### `delay_seconds`<sup>Required</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds"></a>

```python
delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fifo_queue`<sup>Required</sup> <a name="fifo_queue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue"></a>

```python
fifo_queue: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fifo_throughput_limit`<sup>Required</sup> <a name="fifo_throughput_limit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```python
fifo_throughput_limit: str
```

- *Type:* str

---

##### `kms_data_key_reuse_period_seconds`<sup>Required</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```python
kms_data_key_reuse_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `maximum_message_size`<sup>Required</sup> <a name="maximum_message_size" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize"></a>

```python
maximum_message_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_retention_period`<sup>Required</sup> <a name="message_retention_period" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod"></a>

```python
message_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `receive_message_wait_time_seconds`<sup>Required</sup> <a name="receive_message_wait_time_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds"></a>

```python
receive_message_wait_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redrive_allow_policy`<sup>Required</sup> <a name="redrive_allow_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```python
redrive_allow_policy: str
```

- *Type:* str

---

##### `redrive_policy`<sup>Required</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

---

##### `sqs_managed_sse_enabled`<sup>Required</sup> <a name="sqs_managed_sse_enabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```python
sqs_managed_sse_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `visibility_timeout`<sup>Required</sup> <a name="visibility_timeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout"></a>

```python
visibility_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content_based_deduplication: bool | IResolvable = None,
  deduplication_scope: str = None,
  delay_seconds: typing.Union[int, float] = None,
  fifo_queue: bool | IResolvable = None,
  fifo_throughput_limit: str = None,
  kms_data_key_reuse_period_seconds: typing.Union[int, float] = None,
  kms_master_key_id: str = None,
  maximum_message_size: typing.Union[int, float] = None,
  message_retention_period: typing.Union[int, float] = None,
  queue_name: str = None,
  receive_message_wait_time_seconds: typing.Union[int, float] = None,
  redrive_allow_policy: str = None,
  redrive_policy: str = None,
  sqs_managed_sse_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SqsQueueTags] = None,
  visibility_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | The time in seconds for which the delivery of all messages in the queue is delayed. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue">fifo_queue</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, creates a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize">maximum_message_size</a></code> | <code>typing.Union[int, float]</code> | The limit of how many bytes that a message can contain before SQS rejects it. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod">message_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that SQS retains a message. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName">queue_name</a></code> | <code>str</code> | A name for the queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds">receive_message_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables server-side queue encryption using SQS owned encryption keys. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]</code> | The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout">visibility_timeout</a></code> | <code>typing.Union[int, float]</code> | The length of time during which a message will be unavailable after a message is delivered from the queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication.

During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the `ContentBasedDeduplication` attribute for the `CreateQueue` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}

---

##### `deduplication_scope`<sup>Optional</sup> <a name="deduplication_scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```python
deduplication_scope: str
```

- *Type:* str

For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level.

Valid values are `messageGroup` and `queue`.
To enable high throughput for a FIFO queue, set this attribute to `messageGroup`*and* set the `FifoThroughputLimit` attribute to `perMessageGroupId`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}

---

##### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```python
delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in seconds for which the delivery of all messages in the queue is delayed.

You can specify an integer value of `0` to `900` (15 minutes). The default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}

---

##### `fifo_queue`<sup>Optional</sup> <a name="fifo_queue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```python
fifo_queue: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, creates a FIFO queue.

If you don't specify this property, SQS creates a standard queue. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}

---

##### `fifo_throughput_limit`<sup>Optional</sup> <a name="fifo_throughput_limit" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```python
fifo_throughput_limit: str
```

- *Type:* str

For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group.

Valid values are `perQueue` and `perMessageGroupId`.
To enable high throughput for a FIFO queue, set this attribute to `perMessageGroupId`*and* set the `DeduplicationScope` attribute to `messageGroup`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}

---

##### `kms_data_key_reuse_period_seconds`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```python
kms_data_key_reuse_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.

The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS.

To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example `alias/aws/sqs`), key ARN, or key ID. For more information, see the following:

* [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the *Developer Guide*
* [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) in the *API Reference*
* [Request Parameters](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*
* The Key Management Service (KMS) section of the [Security best practices for Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the *Key Management Service Developer Guide*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}

---

##### `maximum_message_size`<sup>Optional</sup> <a name="maximum_message_size" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize"></a>

```python
maximum_message_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit of how many bytes that a message can contain before SQS rejects it.

You can specify an integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#maximum_message_size SqsQueue#maximum_message_size}

---

##### `message_retention_period`<sup>Optional</sup> <a name="message_retention_period" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod"></a>

```python
message_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that SQS retains a message.

You can specify an integer value from `60` seconds (1 minute) to `1,209,600` seconds (14 days). The default value is `345,600` seconds (4 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#message_retention_period SqsQueue#message_retention_period}

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

A name for the queue.

To create a FIFO queue, the name of your FIFO queue must end with the `.fifo` suffix. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the *User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#queue_name SqsQueue#queue_name}

---

##### `receive_message_wait_time_seconds`<sup>Optional</sup> <a name="receive_message_wait_time_seconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds"></a>

```python
receive_message_wait_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available.

You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#receive_message_wait_time_seconds SqsQueue#receive_message_wait_time_seconds}

---

##### `redrive_allow_policy`<sup>Optional</sup> <a name="redrive_allow_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```python
redrive_allow_policy: str
```

- *Type:* str

The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object.

The parameters are as follows:

* `redrivePermission`: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
* `allowAll`: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
* `denyAll`: No source queues can specify this queue as the dead-letter queue.
* `byQueue`: Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
* `sourceQueueArns`: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object.

The parameters are as follows:

* `deadLetterTargetArn`: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of `maxReceiveCount` is exceeded.
* `maxReceiveCount`: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, SQS moves the message to the dead-letter-queue.

The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
*JSON*
`{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`
*YAML*
`deadLetterTargetArn : String`
`maxReceiveCount : Integer`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}

---

##### `sqs_managed_sse_enabled`<sup>Optional</sup> <a name="sqs_managed_sse_enabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```python
sqs_managed_sse_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables server-side queue encryption using SQS owned encryption keys.

Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When `SqsManagedSseEnabled` is not defined, `SSE-SQS` encryption is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SqsQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]

The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#tags SqsQueue#tags}

---

##### `visibility_timeout`<sup>Optional</sup> <a name="visibility_timeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout"></a>

```python
visibility_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time during which a message will be unavailable after a message is delivered from the queue.

This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
For more information about SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#visibility_timeout SqsQueue#visibility_timeout}

---

### SqsQueueTags <a name="SqsQueueTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueueTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#key SqsQueue#key}. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#value SqsQueue#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#key SqsQueue#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#value SqsQueue#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTagsList <a name="SqsQueueTagsList" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SqsQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SqsQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>]

---


### SqsQueueTagsOutputReference <a name="SqsQueueTagsOutputReference" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sqs_queue

sqsQueue.SqsQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SqsQueueTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>

---



