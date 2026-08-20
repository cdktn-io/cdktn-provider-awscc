# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-awscc.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic awscc_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopic(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  archive_policy: str = None,
  content_based_deduplication: bool | IResolvable = None,
  data_protection_policy: str = None,
  delivery_status_logging: IResolvable | typing.List[SnsTopicDeliveryStatusLogging] = None,
  display_name: str = None,
  fifo_throughput_scope: str = None,
  fifo_topic: bool | IResolvable = None,
  kms_master_key_id: str = None,
  signature_version: str = None,
  subscription: IResolvable | typing.List[SnsTopicSubscription] = None,
  tags: IResolvable | typing.List[SnsTopicTags] = None,
  topic_name: str = None,
  tracing_config: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.archivePolicy">archive_policy</a></code> | <code>str</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dataProtectionPolicy">data_protection_policy</a></code> | <code>str</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.deliveryStatusLogging">delivery_status_logging</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]</code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoThroughputScope">fifo_throughput_scope</a></code> | <code>str</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoTopic">fifo_topic</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.signatureVersion">signature_version</a></code> | <code>str</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.subscription">subscription</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]</code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]</code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.topicName">topic_name</a></code> | <code>str</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tracingConfig">tracing_config</a></code> | <code>str</code> | Tracing mode of an SNS topic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archive_policy`<sup>Optional</sup> <a name="archive_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.archivePolicy"></a>

- *Type:* str

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* bool | cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `data_protection_policy`<sup>Optional</sup> <a name="data_protection_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dataProtectionPolicy"></a>

- *Type:* str

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `delivery_status_logging`<sup>Optional</sup> <a name="delivery_status_logging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.deliveryStatusLogging"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.displayName"></a>

- *Type:* str

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `fifo_throughput_scope`<sup>Optional</sup> <a name="fifo_throughput_scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoThroughputScope"></a>

- *Type:* str

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `fifo_topic`<sup>Optional</sup> <a name="fifo_topic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoTopic"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* str

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `signature_version`<sup>Optional</sup> <a name="signature_version" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.signatureVersion"></a>

- *Type:* str

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.subscription"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `topic_name`<sup>Optional</sup> <a name="topic_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.topicName"></a>

- *Type:* str

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tracingConfig"></a>

- *Type:* str

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging">put_delivery_status_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription">put_subscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy">reset_archive_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication">reset_content_based_deduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy">reset_data_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging">reset_delivery_status_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope">reset_fifo_throughput_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic">reset_fifo_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion">reset_signature_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription">reset_subscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName">reset_topic_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig">reset_tracing_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delivery_status_logging` <a name="put_delivery_status_logging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging"></a>

```python
def put_delivery_status_logging(
  value: IResolvable | typing.List[SnsTopicDeliveryStatusLogging]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]

---

##### `put_subscription` <a name="put_subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription"></a>

```python
def put_subscription(
  value: IResolvable | typing.List[SnsTopicSubscription]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SnsTopicTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]

---

##### `reset_archive_policy` <a name="reset_archive_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy"></a>

```python
def reset_archive_policy() -> None
```

##### `reset_content_based_deduplication` <a name="reset_content_based_deduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```python
def reset_content_based_deduplication() -> None
```

##### `reset_data_protection_policy` <a name="reset_data_protection_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy"></a>

```python
def reset_data_protection_policy() -> None
```

##### `reset_delivery_status_logging` <a name="reset_delivery_status_logging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging"></a>

```python
def reset_delivery_status_logging() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_fifo_throughput_scope` <a name="reset_fifo_throughput_scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```python
def reset_fifo_throughput_scope() -> None
```

##### `reset_fifo_topic` <a name="reset_fifo_topic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic"></a>

```python
def reset_fifo_topic() -> None
```

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_signature_version` <a name="reset_signature_version" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion"></a>

```python
def reset_signature_version() -> None
```

##### `reset_subscription` <a name="reset_subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription"></a>

```python
def reset_subscription() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_topic_name` <a name="reset_topic_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName"></a>

```python
def reset_topic_name() -> None
```

##### `reset_tracing_config` <a name="reset_tracing_config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig"></a>

```python
def reset_tracing_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SnsTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging">delivery_status_logging</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription">subscription</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput">archive_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">content_based_deduplication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput">data_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput">delivery_status_logging_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput">fifo_throughput_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput">fifo_topic_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput">signature_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput">subscription_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput">topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput">tracing_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy">archive_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy">data_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope">fifo_throughput_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic">fifo_topic</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion">signature_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName">topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig">tracing_config</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `delivery_status_logging`<sup>Required</sup> <a name="delivery_status_logging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging"></a>

```python
delivery_status_logging: SnsTopicDeliveryStatusLoggingList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription"></a>

```python
subscription: SnsTopicSubscriptionList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags"></a>

```python
tags: SnsTopicTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a>

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `archive_policy_input`<sup>Optional</sup> <a name="archive_policy_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```python
archive_policy_input: str
```

- *Type:* str

---

##### `content_based_deduplication_input`<sup>Optional</sup> <a name="content_based_deduplication_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```python
content_based_deduplication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_protection_policy_input`<sup>Optional</sup> <a name="data_protection_policy_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput"></a>

```python
data_protection_policy_input: str
```

- *Type:* str

---

##### `delivery_status_logging_input`<sup>Optional</sup> <a name="delivery_status_logging_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput"></a>

```python
delivery_status_logging_input: IResolvable | typing.List[SnsTopicDeliveryStatusLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fifo_throughput_scope_input`<sup>Optional</sup> <a name="fifo_throughput_scope_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```python
fifo_throughput_scope_input: str
```

- *Type:* str

---

##### `fifo_topic_input`<sup>Optional</sup> <a name="fifo_topic_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```python
fifo_topic_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `signature_version_input`<sup>Optional</sup> <a name="signature_version_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```python
signature_version_input: str
```

- *Type:* str

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput"></a>

```python
subscription_input: IResolvable | typing.List[SnsTopicSubscription]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SnsTopicTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]

---

##### `topic_name_input`<sup>Optional</sup> <a name="topic_name_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput"></a>

```python
topic_name_input: str
```

- *Type:* str

---

##### `tracing_config_input`<sup>Optional</sup> <a name="tracing_config_input" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```python
tracing_config_input: str
```

- *Type:* str

---

##### `archive_policy`<sup>Required</sup> <a name="archive_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy"></a>

```python
archive_policy: str
```

- *Type:* str

---

##### `content_based_deduplication`<sup>Required</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_protection_policy`<sup>Required</sup> <a name="data_protection_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy"></a>

```python
data_protection_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fifo_throughput_scope`<sup>Required</sup> <a name="fifo_throughput_scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```python
fifo_throughput_scope: str
```

- *Type:* str

---

##### `fifo_topic`<sup>Required</sup> <a name="fifo_topic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic"></a>

```python
fifo_topic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `signature_version`<sup>Required</sup> <a name="signature_version" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion"></a>

```python
signature_version: str
```

- *Type:* str

---

##### `topic_name`<sup>Required</sup> <a name="topic_name" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName"></a>

```python
topic_name: str
```

- *Type:* str

---

##### `tracing_config`<sup>Required</sup> <a name="tracing_config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig"></a>

```python
tracing_config: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  archive_policy: str = None,
  content_based_deduplication: bool | IResolvable = None,
  data_protection_policy: str = None,
  delivery_status_logging: IResolvable | typing.List[SnsTopicDeliveryStatusLogging] = None,
  display_name: str = None,
  fifo_throughput_scope: str = None,
  fifo_topic: bool | IResolvable = None,
  kms_master_key_id: str = None,
  signature_version: str = None,
  subscription: IResolvable | typing.List[SnsTopicSubscription] = None,
  tags: IResolvable | typing.List[SnsTopicTags] = None,
  topic_name: str = None,
  tracing_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy">archive_policy</a></code> | <code>str</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>bool \| cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy">data_protection_policy</a></code> | <code>str</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging">delivery_status_logging</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]</code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope">fifo_throughput_scope</a></code> | <code>str</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic">fifo_topic</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion">signature_version</a></code> | <code>str</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription">subscription</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]</code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]</code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName">topic_name</a></code> | <code>str</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig">tracing_config</a></code> | <code>str</code> | Tracing mode of an SNS topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archive_policy`<sup>Optional</sup> <a name="archive_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```python
archive_policy: str
```

- *Type:* str

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `data_protection_policy`<sup>Optional</sup> <a name="data_protection_policy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy"></a>

```python
data_protection_policy: str
```

- *Type:* str

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `delivery_status_logging`<sup>Optional</sup> <a name="delivery_status_logging" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging"></a>

```python
delivery_status_logging: IResolvable | typing.List[SnsTopicDeliveryStatusLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `fifo_throughput_scope`<sup>Optional</sup> <a name="fifo_throughput_scope" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```python
fifo_throughput_scope: str
```

- *Type:* str

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `fifo_topic`<sup>Optional</sup> <a name="fifo_topic" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```python
fifo_topic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `signature_version`<sup>Optional</sup> <a name="signature_version" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```python
signature_version: str
```

- *Type:* str

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription"></a>

```python
subscription: IResolvable | typing.List[SnsTopicSubscription]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SnsTopicTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `topic_name`<sup>Optional</sup> <a name="topic_name" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName"></a>

```python
topic_name: str
```

- *Type:* str

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```python
tracing_config: str
```

- *Type:* str

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

### SnsTopicDeliveryStatusLogging <a name="SnsTopicDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicDeliveryStatusLogging(
  failure_feedback_role_arn: str = None,
  protocol: str = None,
  success_feedback_role_arn: str = None,
  success_feedback_sample_rate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn">failure_feedback_role_arn</a></code> | <code>str</code> | The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol">protocol</a></code> | <code>str</code> | Indicates one of the supported protocols for the Amazon SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn">success_feedback_role_arn</a></code> | <code>str</code> | The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate">success_feedback_sample_rate</a></code> | <code>str</code> | The percentage of successful message deliveries to be logged in Amazon CloudWatch. |

---

##### `failure_feedback_role_arn`<sup>Optional</sup> <a name="failure_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn"></a>

```python
failure_feedback_role_arn: str
```

- *Type:* str

The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#failure_feedback_role_arn SnsTopic#failure_feedback_role_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Indicates one of the supported protocols for the Amazon SNS topic.

At least one of the other three `LoggingConfig` properties is recommend along with `Protocol`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

##### `success_feedback_role_arn`<sup>Optional</sup> <a name="success_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn"></a>

```python
success_feedback_role_arn: str
```

- *Type:* str

The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#success_feedback_role_arn SnsTopic#success_feedback_role_arn}

---

##### `success_feedback_sample_rate`<sup>Optional</sup> <a name="success_feedback_sample_rate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate"></a>

```python
success_feedback_sample_rate: str
```

- *Type:* str

The percentage of successful message deliveries to be logged in Amazon CloudWatch.

Valid percentage values range from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#success_feedback_sample_rate SnsTopic#success_feedback_sample_rate}

---

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicSubscription(
  endpoint: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>str</code> | The endpoint that receives notifications from the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>str</code> | The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The endpoint that receives notifications from the SNS topic.

The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `Subscribe` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#endpoint SnsTopic#endpoint}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

### SnsTopicTags <a name="SnsTopicTags" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key">key</a></code> | <code>str</code> | The required key portion of the tag. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value">value</a></code> | <code>str</code> | The optional value portion of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key"></a>

```python
key: str
```

- *Type:* str

The required key portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#key SnsTopic#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value"></a>

```python
value: str
```

- *Type:* str

The optional value portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_topic#value SnsTopic#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SnsTopicDeliveryStatusLoggingList <a name="SnsTopicDeliveryStatusLoggingList" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicDeliveryStatusLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SnsTopicDeliveryStatusLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SnsTopicDeliveryStatusLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>]

---


### SnsTopicDeliveryStatusLoggingOutputReference <a name="SnsTopicDeliveryStatusLoggingOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicDeliveryStatusLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn">reset_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn">reset_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate">reset_success_feedback_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_feedback_role_arn` <a name="reset_failure_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn"></a>

```python
def reset_failure_feedback_role_arn() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_success_feedback_role_arn` <a name="reset_success_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn"></a>

```python
def reset_success_feedback_role_arn() -> None
```

##### `reset_success_feedback_sample_rate` <a name="reset_success_feedback_sample_rate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate"></a>

```python
def reset_success_feedback_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput">failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput">success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput">success_feedback_sample_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn">failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn">success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate">success_feedback_sample_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_feedback_role_arn_input`<sup>Optional</sup> <a name="failure_feedback_role_arn_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput"></a>

```python
failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `success_feedback_role_arn_input`<sup>Optional</sup> <a name="success_feedback_role_arn_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput"></a>

```python
success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `success_feedback_sample_rate_input`<sup>Optional</sup> <a name="success_feedback_sample_rate_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput"></a>

```python
success_feedback_sample_rate_input: str
```

- *Type:* str

---

##### `failure_feedback_role_arn`<sup>Required</sup> <a name="failure_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn"></a>

```python
failure_feedback_role_arn: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `success_feedback_role_arn`<sup>Required</sup> <a name="success_feedback_role_arn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn"></a>

```python
success_feedback_role_arn: str
```

- *Type:* str

---

##### `success_feedback_sample_rate`<sup>Required</sup> <a name="success_feedback_sample_rate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate"></a>

```python
success_feedback_sample_rate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SnsTopicDeliveryStatusLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>

---


### SnsTopicSubscriptionList <a name="SnsTopicSubscriptionList" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicSubscriptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SnsTopicSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SnsTopicSubscription]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>]

---


### SnsTopicSubscriptionOutputReference <a name="SnsTopicSubscriptionOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SnsTopicSubscription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>

---


### SnsTopicTagsList <a name="SnsTopicTagsList" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SnsTopicTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SnsTopicTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>]

---


### SnsTopicTagsOutputReference <a name="SnsTopicTagsOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sns_topic

snsTopic.SnsTopicTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SnsTopicTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>

---



