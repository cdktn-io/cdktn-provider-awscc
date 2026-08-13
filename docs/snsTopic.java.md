# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-awscc.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic awscc_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopic;

SnsTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .archivePolicy(java.lang.String)
//  .contentBasedDeduplication(java.lang.Boolean|IResolvable)
//  .dataProtectionPolicy(java.lang.String)
//  .deliveryStatusLogging(IResolvable|java.util.List<SnsTopicDeliveryStatusLogging>)
//  .displayName(java.lang.String)
//  .fifoThroughputScope(java.lang.String)
//  .fifoTopic(java.lang.Boolean|IResolvable)
//  .kmsMasterKeyId(java.lang.String)
//  .signatureVersion(java.lang.String)
//  .subscription(IResolvable|java.util.List<SnsTopicSubscription>)
//  .tags(IResolvable|java.util.List<SnsTopicTags>)
//  .topicName(java.lang.String)
//  .tracingConfig(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.archivePolicy">archivePolicy</a></code> | <code>java.lang.String</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dataProtectionPolicy">dataProtectionPolicy</a></code> | <code>java.lang.String</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.deliveryStatusLogging">deliveryStatusLogging</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>></code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoThroughputScope">fifoThroughputScope</a></code> | <code>java.lang.String</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.signatureVersion">signatureVersion</a></code> | <code>java.lang.String</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.subscription">subscription</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>></code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>></code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.topicName">topicName</a></code> | <code>java.lang.String</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | Tracing mode of an SNS topic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archivePolicy`<sup>Optional</sup> <a name="archivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.archivePolicy"></a>

- *Type:* java.lang.String

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `dataProtectionPolicy`<sup>Optional</sup> <a name="dataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.dataProtectionPolicy"></a>

- *Type:* java.lang.String

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `deliveryStatusLogging`<sup>Optional</sup> <a name="deliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.deliveryStatusLogging"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>>

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `fifoThroughputScope`<sup>Optional</sup> <a name="fifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoThroughputScope"></a>

- *Type:* java.lang.String

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.fifoTopic"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* java.lang.String

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.signatureVersion"></a>

- *Type:* java.lang.String

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.subscription"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>>

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>>

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.topicName"></a>

- *Type:* java.lang.String

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.tracingConfig"></a>

- *Type:* java.lang.String

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging">putDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy">resetArchivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy">resetDataProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging">resetDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope">resetFifoThroughputScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic">resetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion">resetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription">resetSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName">resetTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryStatusLogging` <a name="putDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging"></a>

```java
public void putDeliveryStatusLogging(IResolvable|java.util.List<SnsTopicDeliveryStatusLogging> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>>

---

##### `putSubscription` <a name="putSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription"></a>

```java
public void putSubscription(IResolvable|java.util.List<SnsTopicSubscription> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SnsTopicTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>>

---

##### `resetArchivePolicy` <a name="resetArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy"></a>

```java
public void resetArchivePolicy()
```

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```java
public void resetContentBasedDeduplication()
```

##### `resetDataProtectionPolicy` <a name="resetDataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy"></a>

```java
public void resetDataProtectionPolicy()
```

##### `resetDeliveryStatusLogging` <a name="resetDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging"></a>

```java
public void resetDeliveryStatusLogging()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFifoThroughputScope` <a name="resetFifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```java
public void resetFifoThroughputScope()
```

##### `resetFifoTopic` <a name="resetFifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic"></a>

```java
public void resetFifoTopic()
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```java
public void resetKmsMasterKeyId()
```

##### `resetSignatureVersion` <a name="resetSignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion"></a>

```java
public void resetSignatureVersion()
```

##### `resetSubscription` <a name="resetSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription"></a>

```java
public void resetSubscription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags"></a>

```java
public void resetTags()
```

##### `resetTopicName` <a name="resetTopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName"></a>

```java
public void resetTopicName()
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig"></a>

```java
public void resetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopic;

SnsTopic.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopic;

SnsTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopic;

SnsTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopic;

SnsTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SnsTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SnsTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging">deliveryStatusLogging</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription">subscription</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput">archivePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput">dataProtectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput">deliveryStatusLoggingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput">fifoThroughputScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput">fifoTopicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput">signatureVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput">subscriptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput">topicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput">tracingConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy">archivePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy">dataProtectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope">fifoThroughputScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion">signatureVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName">topicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deliveryStatusLogging`<sup>Required</sup> <a name="deliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging"></a>

```java
public SnsTopicDeliveryStatusLoggingList getDeliveryStatusLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription"></a>

```java
public SnsTopicSubscriptionList getSubscription();
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags"></a>

```java
public SnsTopicTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a>

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `archivePolicyInput`<sup>Optional</sup> <a name="archivePolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```java
public java.lang.String getArchivePolicyInput();
```

- *Type:* java.lang.String

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```java
public java.lang.Boolean|IResolvable getContentBasedDeduplicationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataProtectionPolicyInput`<sup>Optional</sup> <a name="dataProtectionPolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput"></a>

```java
public java.lang.String getDataProtectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deliveryStatusLoggingInput`<sup>Optional</sup> <a name="deliveryStatusLoggingInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput"></a>

```java
public IResolvable|java.util.List<SnsTopicDeliveryStatusLogging> getDeliveryStatusLoggingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fifoThroughputScopeInput`<sup>Optional</sup> <a name="fifoThroughputScopeInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```java
public java.lang.String getFifoThroughputScopeInput();
```

- *Type:* java.lang.String

---

##### `fifoTopicInput`<sup>Optional</sup> <a name="fifoTopicInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```java
public java.lang.Boolean|IResolvable getFifoTopicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```java
public java.lang.String getKmsMasterKeyIdInput();
```

- *Type:* java.lang.String

---

##### `signatureVersionInput`<sup>Optional</sup> <a name="signatureVersionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```java
public java.lang.String getSignatureVersionInput();
```

- *Type:* java.lang.String

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput"></a>

```java
public IResolvable|java.util.List<SnsTopicSubscription> getSubscriptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SnsTopicTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>>

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput"></a>

```java
public java.lang.String getTopicNameInput();
```

- *Type:* java.lang.String

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```java
public java.lang.String getTracingConfigInput();
```

- *Type:* java.lang.String

---

##### `archivePolicy`<sup>Required</sup> <a name="archivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy"></a>

```java
public java.lang.String getArchivePolicy();
```

- *Type:* java.lang.String

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```java
public java.lang.Boolean|IResolvable getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataProtectionPolicy`<sup>Required</sup> <a name="dataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy"></a>

```java
public java.lang.String getDataProtectionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fifoThroughputScope`<sup>Required</sup> <a name="fifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```java
public java.lang.String getFifoThroughputScope();
```

- *Type:* java.lang.String

---

##### `fifoTopic`<sup>Required</sup> <a name="fifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic"></a>

```java
public java.lang.Boolean|IResolvable getFifoTopic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `signatureVersion`<sup>Required</sup> <a name="signatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion"></a>

```java
public java.lang.String getSignatureVersion();
```

- *Type:* java.lang.String

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig"></a>

```java
public java.lang.String getTracingConfig();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicConfig;

SnsTopicConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .archivePolicy(java.lang.String)
//  .contentBasedDeduplication(java.lang.Boolean|IResolvable)
//  .dataProtectionPolicy(java.lang.String)
//  .deliveryStatusLogging(IResolvable|java.util.List<SnsTopicDeliveryStatusLogging>)
//  .displayName(java.lang.String)
//  .fifoThroughputScope(java.lang.String)
//  .fifoTopic(java.lang.Boolean|IResolvable)
//  .kmsMasterKeyId(java.lang.String)
//  .signatureVersion(java.lang.String)
//  .subscription(IResolvable|java.util.List<SnsTopicSubscription>)
//  .tags(IResolvable|java.util.List<SnsTopicTags>)
//  .topicName(java.lang.String)
//  .tracingConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy">archivePolicy</a></code> | <code>java.lang.String</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy">dataProtectionPolicy</a></code> | <code>java.lang.String</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging">deliveryStatusLogging</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>></code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope">fifoThroughputScope</a></code> | <code>java.lang.String</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion">signatureVersion</a></code> | <code>java.lang.String</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription">subscription</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>></code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>></code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName">topicName</a></code> | <code>java.lang.String</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | Tracing mode of an SNS topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archivePolicy`<sup>Optional</sup> <a name="archivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```java
public java.lang.String getArchivePolicy();
```

- *Type:* java.lang.String

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```java
public java.lang.Boolean|IResolvable getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `dataProtectionPolicy`<sup>Optional</sup> <a name="dataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy"></a>

```java
public java.lang.String getDataProtectionPolicy();
```

- *Type:* java.lang.String

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `deliveryStatusLogging`<sup>Optional</sup> <a name="deliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging"></a>

```java
public IResolvable|java.util.List<SnsTopicDeliveryStatusLogging> getDeliveryStatusLogging();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>>

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `fifoThroughputScope`<sup>Optional</sup> <a name="fifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```java
public java.lang.String getFifoThroughputScope();
```

- *Type:* java.lang.String

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```java
public java.lang.Boolean|IResolvable getFifoTopic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```java
public java.lang.String getSignatureVersion();
```

- *Type:* java.lang.String

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription"></a>

```java
public IResolvable|java.util.List<SnsTopicSubscription> getSubscription();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>>

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SnsTopicTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>>

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```java
public java.lang.String getTracingConfig();
```

- *Type:* java.lang.String

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

### SnsTopicDeliveryStatusLogging <a name="SnsTopicDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicDeliveryStatusLogging;

SnsTopicDeliveryStatusLogging.builder()
//  .failureFeedbackRoleArn(java.lang.String)
//  .protocol(java.lang.String)
//  .successFeedbackRoleArn(java.lang.String)
//  .successFeedbackSampleRate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Indicates one of the supported protocols for the Amazon SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>java.lang.String</code> | The percentage of successful message deliveries to be logged in Amazon CloudWatch. |

---

##### `failureFeedbackRoleArn`<sup>Optional</sup> <a name="failureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn"></a>

```java
public java.lang.String getFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#failure_feedback_role_arn SnsTopic#failure_feedback_role_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Indicates one of the supported protocols for the Amazon SNS topic.

At least one of the other three `LoggingConfig` properties is recommend along with `Protocol`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

##### `successFeedbackRoleArn`<sup>Optional</sup> <a name="successFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn"></a>

```java
public java.lang.String getSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#success_feedback_role_arn SnsTopic#success_feedback_role_arn}

---

##### `successFeedbackSampleRate`<sup>Optional</sup> <a name="successFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate"></a>

```java
public java.lang.String getSuccessFeedbackSampleRate();
```

- *Type:* java.lang.String

The percentage of successful message deliveries to be logged in Amazon CloudWatch.

Valid percentage values range from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#success_feedback_sample_rate SnsTopic#success_feedback_sample_rate}

---

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicSubscription;

SnsTopicSubscription.builder()
//  .endpoint(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint that receives notifications from the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint that receives notifications from the SNS topic.

The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `Subscribe` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#endpoint SnsTopic#endpoint}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

### SnsTopicTags <a name="SnsTopicTags" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicTags;

SnsTopicTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key">key</a></code> | <code>java.lang.String</code> | The required key portion of the tag. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value">value</a></code> | <code>java.lang.String</code> | The optional value portion of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The required key portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#key SnsTopic#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The optional value portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sns_topic#value SnsTopic#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SnsTopicDeliveryStatusLoggingList <a name="SnsTopicDeliveryStatusLoggingList" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicDeliveryStatusLoggingList;

new SnsTopicDeliveryStatusLoggingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get"></a>

```java
public SnsTopicDeliveryStatusLoggingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SnsTopicDeliveryStatusLogging> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>>

---


### SnsTopicDeliveryStatusLoggingOutputReference <a name="SnsTopicDeliveryStatusLoggingOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicDeliveryStatusLoggingOutputReference;

new SnsTopicDeliveryStatusLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn">resetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn">resetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate">resetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureFeedbackRoleArn` <a name="resetFailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn"></a>

```java
public void resetFailureFeedbackRoleArn()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSuccessFeedbackRoleArn` <a name="resetSuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn"></a>

```java
public void resetSuccessFeedbackRoleArn()
```

##### `resetSuccessFeedbackSampleRate` <a name="resetSuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate"></a>

```java
public void resetSuccessFeedbackSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput">failureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput">successFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput">successFeedbackSampleRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureFeedbackRoleArnInput`<sup>Optional</sup> <a name="failureFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput"></a>

```java
public java.lang.String getFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `successFeedbackRoleArnInput`<sup>Optional</sup> <a name="successFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput"></a>

```java
public java.lang.String getSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `successFeedbackSampleRateInput`<sup>Optional</sup> <a name="successFeedbackSampleRateInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput"></a>

```java
public java.lang.String getSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.String

---

##### `failureFeedbackRoleArn`<sup>Required</sup> <a name="failureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn"></a>

```java
public java.lang.String getFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `successFeedbackRoleArn`<sup>Required</sup> <a name="successFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn"></a>

```java
public java.lang.String getSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `successFeedbackSampleRate`<sup>Required</sup> <a name="successFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate"></a>

```java
public java.lang.String getSuccessFeedbackSampleRate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue"></a>

```java
public IResolvable|SnsTopicDeliveryStatusLogging getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>

---


### SnsTopicSubscriptionList <a name="SnsTopicSubscriptionList" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicSubscriptionList;

new SnsTopicSubscriptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get"></a>

```java
public SnsTopicSubscriptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SnsTopicSubscription> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>>

---


### SnsTopicSubscriptionOutputReference <a name="SnsTopicSubscriptionOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicSubscriptionOutputReference;

new SnsTopicSubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue"></a>

```java
public IResolvable|SnsTopicSubscription getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>

---


### SnsTopicTagsList <a name="SnsTopicTagsList" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicTagsList;

new SnsTopicTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get"></a>

```java
public SnsTopicTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SnsTopicTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>>

---


### SnsTopicTagsOutputReference <a name="SnsTopicTagsOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_topic.SnsTopicTagsOutputReference;

new SnsTopicTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SnsTopicTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>

---



