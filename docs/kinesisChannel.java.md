# `kinesisChannel` Submodule <a name="`kinesisChannel` Submodule" id="@cdktn/provider-awscc.kinesisChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisChannel <a name="KinesisChannel" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel awscc_kinesis_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannel;

KinesisChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
    .streamConfigurationList(IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct>)
//  .encryptionConfiguration(KinesisChannelEncryptionConfiguration)
//  .loggingConfiguration(KinesisChannelLoggingConfiguration)
//  .s3DestinationConfiguration(KinesisChannelS3DestinationConfiguration)
//  .s3TablesDestinationConfiguration(KinesisChannelS3TablesDestinationConfiguration)
//  .tags(IResolvable|java.util.List<KinesisChannelTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the channel. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.streamConfigurationList">streamConfigurationList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>></code> | List of stream configurations associated with the channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | Server-side encryption configuration for data at rest. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3TablesDestinationConfiguration">s3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>></code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

The name of the channel. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#channel_name KinesisChannel#channel_name}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#service_execution_role_arn KinesisChannel#service_execution_role_arn}

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.streamConfigurationList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>>

List of stream configurations associated with the channel.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_configuration_list KinesisChannel#stream_configuration_list}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

Server-side encryption configuration for data at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_configuration KinesisChannel#encryption_configuration}

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#logging_configuration KinesisChannel#logging_configuration}

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3DestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_destination_configuration KinesisChannel#s3_destination_configuration}

---

##### `s3TablesDestinationConfiguration`<sup>Optional</sup> <a name="s3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.s3TablesDestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_destination_configuration KinesisChannel#s3_tables_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>>

An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#tags KinesisChannel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration">putS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration">putS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList">putStreamConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration">resetS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration">resetS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(KinesisChannelEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(KinesisChannelLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---

##### `putS3DestinationConfiguration` <a name="putS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration"></a>

```java
public void putS3DestinationConfiguration(KinesisChannelS3DestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---

##### `putS3TablesDestinationConfiguration` <a name="putS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration"></a>

```java
public void putS3TablesDestinationConfiguration(KinesisChannelS3TablesDestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---

##### `putStreamConfigurationList` <a name="putStreamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList"></a>

```java
public void putStreamConfigurationList(IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KinesisChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetS3DestinationConfiguration` <a name="resetS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration"></a>

```java
public void resetS3DestinationConfiguration()
```

##### `resetS3TablesDestinationConfiguration` <a name="resetS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration"></a>

```java
public void resetS3TablesDestinationConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannel;

KinesisChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannel;

KinesisChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannel;

KinesisChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannel;

KinesisChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KinesisChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KinesisChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KinesisChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KinesisChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp">channelCreationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus">channelStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration">s3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList">streamConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput">s3DestinationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput">s3TablesDestinationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput">streamConfigurationListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

---

##### `channelCreationTimestamp`<sup>Required</sup> <a name="channelCreationTimestamp" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp"></a>

```java
public java.lang.String getChannelCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `channelStatus`<sup>Required</sup> <a name="channelStatus" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus"></a>

```java
public java.lang.String getChannelStatus();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration"></a>

```java
public KinesisChannelEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration"></a>

```java
public KinesisChannelLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a>

---

##### `s3DestinationConfiguration`<sup>Required</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration"></a>

```java
public KinesisChannelS3DestinationConfigurationOutputReference getS3DestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a>

---

##### `s3TablesDestinationConfiguration`<sup>Required</sup> <a name="s3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationOutputReference getS3TablesDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a>

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList"></a>

```java
public KinesisChannelStreamConfigurationListStructList getStreamConfigurationList();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags"></a>

```java
public KinesisChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput"></a>

```java
public IResolvable|KinesisChannelEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput"></a>

```java
public IResolvable|KinesisChannelLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---

##### `s3DestinationConfigurationInput`<sup>Optional</sup> <a name="s3DestinationConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfiguration getS3DestinationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---

##### `s3TablesDestinationConfigurationInput`<sup>Optional</sup> <a name="s3TablesDestinationConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfiguration getS3TablesDestinationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamConfigurationListInput`<sup>Optional</sup> <a name="streamConfigurationListInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput"></a>

```java
public IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct> getStreamConfigurationListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KinesisChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisChannelConfig <a name="KinesisChannelConfig" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelConfig;

KinesisChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
    .streamConfigurationList(IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct>)
//  .encryptionConfiguration(KinesisChannelEncryptionConfiguration)
//  .loggingConfiguration(KinesisChannelLoggingConfiguration)
//  .s3DestinationConfiguration(KinesisChannelS3DestinationConfiguration)
//  .s3TablesDestinationConfiguration(KinesisChannelS3TablesDestinationConfiguration)
//  .tags(IResolvable|java.util.List<KinesisChannelTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the channel. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList">streamConfigurationList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>></code> | List of stream configurations associated with the channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | Server-side encryption configuration for data at rest. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration">s3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>></code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

The name of the channel. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#channel_name KinesisChannel#channel_name}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#service_execution_role_arn KinesisChannel#service_execution_role_arn}

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList"></a>

```java
public IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct> getStreamConfigurationList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>>

List of stream configurations associated with the channel.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_configuration_list KinesisChannel#stream_configuration_list}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration"></a>

```java
public KinesisChannelEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

Server-side encryption configuration for data at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_configuration KinesisChannel#encryption_configuration}

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration"></a>

```java
public KinesisChannelLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#logging_configuration KinesisChannel#logging_configuration}

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration"></a>

```java
public KinesisChannelS3DestinationConfiguration getS3DestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_destination_configuration KinesisChannel#s3_destination_configuration}

---

##### `s3TablesDestinationConfiguration`<sup>Optional</sup> <a name="s3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration"></a>

```java
public KinesisChannelS3TablesDestinationConfiguration getS3TablesDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_destination_configuration KinesisChannel#s3_tables_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KinesisChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>>

An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#tags KinesisChannel#tags}

---

### KinesisChannelEncryptionConfiguration <a name="KinesisChannelEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelEncryptionConfiguration;

KinesisChannelEncryptionConfiguration.builder()
//  .encryptionType(java.lang.String)
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The encryption type. KMS is the only supported value. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The customer-managed AWS KMS key. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The encryption type. KMS is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#encryption_type KinesisChannel#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The customer-managed AWS KMS key.

Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#key_id KinesisChannel#key_id}

---

### KinesisChannelLoggingConfiguration <a name="KinesisChannelLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelLoggingConfiguration;

KinesisChannelLoggingConfiguration.builder()
//  .cloudwatchLogs(KinesisChannelLoggingConfigurationCloudwatchLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs"></a>

```java
public KinesisChannelLoggingConfigurationCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#cloudwatch_logs KinesisChannel#cloudwatch_logs}

---

### KinesisChannelLoggingConfigurationCloudwatchLogs <a name="KinesisChannelLoggingConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelLoggingConfigurationCloudwatchLogs;

KinesisChannelLoggingConfigurationCloudwatchLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroupName(java.lang.String)
//  .logStreamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether CloudWatch Logs delivery is enabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether CloudWatch Logs delivery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#enabled KinesisChannel#enabled}

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_group_name KinesisChannel#log_group_name}

---

##### `logStreamName`<sup>Optional</sup> <a name="logStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#log_stream_name KinesisChannel#log_stream_name}

---

### KinesisChannelS3DestinationConfiguration <a name="KinesisChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfiguration;

KinesisChannelS3DestinationConfiguration.builder()
//  .dataFreshnessInSeconds(java.lang.Number)
//  .deadLetterQueueS3Configuration(KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration)
//  .storageConfiguration(KinesisChannelS3DestinationConfigurationStorageConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | S3 storage configuration including the destination bucket, output key template, storage class, and compression type. |

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `deadLetterQueueS3Configuration`<sup>Optional</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```java
public KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration getDeadLetterQueueS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination.

When omitted, the service auto-fills using the storage BucketARN with an error prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration"></a>

```java
public KinesisChannelS3DestinationConfigurationStorageConfiguration getStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

S3 storage configuration including the destination bucket, output key template, storage class, and compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_configuration KinesisChannel#storage_configuration}

---

### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration;

KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.builder()
//  .bucketArn(java.lang.String)
//  .errorOutputPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3DestinationConfigurationStorageConfiguration <a name="KinesisChannelS3DestinationConfigurationStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfigurationStorageConfiguration;

KinesisChannelS3DestinationConfigurationStorageConfiguration.builder()
//  .bucketArn(java.lang.String)
//  .compressionType(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .outputKeyTemplate(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | The compression algorithm applied to delivered objects. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the expected owner of the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>java.lang.String</code> | Optional template for the S3 object key path. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The S3 storage class for delivered objects. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The ARN of the S3 bucket for record delivery.

Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

The compression algorithm applied to delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

The AWS account ID of the expected owner of the destination S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

##### `outputKeyTemplate`<sup>Optional</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate"></a>

```java
public java.lang.String getOutputKeyTemplate();
```

- *Type:* java.lang.String

Optional template for the S3 object key path.

Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#output_key_template KinesisChannel#output_key_template}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The S3 storage class for delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#storage_class KinesisChannel#storage_class}

---

### KinesisChannelS3TablesDestinationConfiguration <a name="KinesisChannelS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfiguration;

KinesisChannelS3TablesDestinationConfiguration.builder()
//  .dataFreshnessInSeconds(java.lang.Number)
//  .deadLetterQueueS3Configuration(KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration)
//  .s3TablesConfigurationList(IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList">s3TablesConfigurationList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>></code> | The list of S3 Tables destinations. |

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `deadLetterQueueS3Configuration`<sup>Optional</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration getDeadLetterQueueS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination.

Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `s3TablesConfigurationList`<sup>Optional</sup> <a name="s3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct> getS3TablesConfigurationList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>>

The list of S3 Tables destinations.

v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#s3_tables_configuration_list KinesisChannel#s3_tables_configuration_list}

---

### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration;

KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.builder()
//  .bucketArn(java.lang.String)
//  .errorOutputPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec;

KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.builder()
//  .partitionFields(IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields">partitionFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>></code> | List of partition fields that define how records are partitioned when written to the destination table. |

---

##### `partitionFields`<sup>Optional</sup> <a name="partitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields> getPartitionFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>>

List of partition fields that define how records are partitioned when written to the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#partition_fields KinesisChannel#partition_fields}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields;

KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.builder()
//  .sourceName(java.lang.String)
//  .transform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | The name of the source column on which the transform is applied. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform">transform</a></code> | <code>java.lang.String</code> | The partitioning transform applied to the SourceName column. |

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

The name of the source column on which the transform is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#source_name KinesisChannel#source_name}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

The partitioning transform applied to the SourceName column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#transform KinesisChannel#transform}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct;

KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.builder()
//  .compressionType(java.lang.String)
//  .namespace(java.lang.String)
//  .partitionSpec(KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec)
//  .tableBucketArn(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | The compression algorithm applied to objects delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The name of the S3 Tables namespace that contains the destination table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | The partition specification used by the destination Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 Tables table bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the destination S3 Tables table. |

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

The compression algorithm applied to objects delivered to the S3 Tables destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The name of the S3 Tables namespace that contains the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#namespace KinesisChannel#namespace}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

The partition specification used by the destination Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#partition_spec KinesisChannel#partition_spec}

---

##### `tableBucketArn`<sup>Optional</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn"></a>

```java
public java.lang.String getTableBucketArn();
```

- *Type:* java.lang.String

The ARN of the S3 Tables table bucket for record delivery.

Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#table_bucket_arn KinesisChannel#table_bucket_arn}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the destination S3 Tables table.

The table is created for the customer if it does not yet exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#table_name KinesisChannel#table_name}

---

### KinesisChannelStreamConfigurationListRecordConfiguration <a name="KinesisChannelStreamConfigurationListRecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelStreamConfigurationListRecordConfiguration;

KinesisChannelStreamConfigurationListRecordConfiguration.builder()
    .recordFormatType(java.lang.String)
//  .gsrSchemaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType">recordFormatType</a></code> | <code>java.lang.String</code> | The format used to interpret records read from the source stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn">gsrSchemaArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Glue Schema Registry (GSR) schema. |

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType"></a>

```java
public java.lang.String getRecordFormatType();
```

- *Type:* java.lang.String

The format used to interpret records read from the source stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#record_format_type KinesisChannel#record_format_type}

---

##### `gsrSchemaArn`<sup>Optional</sup> <a name="gsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn"></a>

```java
public java.lang.String getGsrSchemaArn();
```

- *Type:* java.lang.String

The ARN of the AWS Glue Schema Registry (GSR) schema.

Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#gsr_schema_arn KinesisChannel#gsr_schema_arn}

---

### KinesisChannelStreamConfigurationListStruct <a name="KinesisChannelStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelStreamConfigurationListStruct;

KinesisChannelStreamConfigurationListStruct.builder()
    .recordConfiguration(KinesisChannelStreamConfigurationListRecordConfiguration)
    .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration">recordConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | The configuration that describes how records on the source stream are encoded. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from. |

---

##### `recordConfiguration`<sup>Required</sup> <a name="recordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration"></a>

```java
public KinesisChannelStreamConfigurationListRecordConfiguration getRecordConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

The configuration that describes how records on the source stream are encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#record_configuration KinesisChannel#record_configuration}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#stream_arn KinesisChannel#stream_arn}

---

### KinesisChannelTags <a name="KinesisChannelTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelTags;

KinesisChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#key KinesisChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kinesis_channel#value KinesisChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisChannelEncryptionConfigurationOutputReference <a name="KinesisChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelEncryptionConfigurationOutputReference;

new KinesisChannelEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---


### KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference <a name="KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference;

new KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName">resetLogStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName"></a>

```java
public void resetLogGroupName()
```

##### `resetLogStreamName` <a name="resetLogStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName"></a>

```java
public void resetLogStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput">logStreamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `logStreamNameInput`<sup>Optional</sup> <a name="logStreamNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput"></a>

```java
public java.lang.String getLogStreamNameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelLoggingConfigurationCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---


### KinesisChannelLoggingConfigurationOutputReference <a name="KinesisChannelLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelLoggingConfigurationOutputReference;

new KinesisChannelLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(KinesisChannelLoggingConfigurationCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs"></a>

```java
public KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|KinesisChannelLoggingConfigurationCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---


### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference;

new KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```java
public void resetErrorOutputPrefix()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```java
public java.lang.String getErrorOutputPrefixInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### KinesisChannelS3DestinationConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfigurationOutputReference;

new KinesisChannelS3DestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">putDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration">putStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">resetDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration">resetStorageConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterQueueS3Configuration` <a name="putDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```java
public void putDeadLetterQueueS3Configuration(KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `putStorageConfiguration` <a name="putStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration"></a>

```java
public void putStorageConfiguration(KinesisChannelS3DestinationConfigurationStorageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```java
public void resetDataFreshnessInSeconds()
```

##### `resetDeadLetterQueueS3Configuration` <a name="resetDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```java
public void resetDeadLetterQueueS3Configuration()
```

##### `resetStorageConfiguration` <a name="resetStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration"></a>

```java
public void resetStorageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">deadLetterQueueS3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput">storageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterQueueS3Configuration`<sup>Required</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```java
public KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference getDeadLetterQueueS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration"></a>

```java
public KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference getStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a>

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```java
public java.lang.Number getDataFreshnessInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3ConfigurationInput`<sup>Optional</sup> <a name="deadLetterQueueS3ConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration getDeadLetterQueueS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `storageConfigurationInput`<sup>Optional</sup> <a name="storageConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfigurationStorageConfiguration getStorageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---


### KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference;

new KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate">resetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetOutputKeyTemplate` <a name="resetOutputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate"></a>

```java
public void resetOutputKeyTemplate()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput">outputKeyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `outputKeyTemplateInput`<sup>Optional</sup> <a name="outputKeyTemplateInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput"></a>

```java
public java.lang.String getOutputKeyTemplateInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputKeyTemplate`<sup>Required</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate"></a>

```java
public java.lang.String getOutputKeyTemplate();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3DestinationConfigurationStorageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---


### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference;

new KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```java
public void resetErrorOutputPrefix()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```java
public java.lang.String getErrorOutputPrefixInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### KinesisChannelS3TablesDestinationConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationOutputReference;

new KinesisChannelS3TablesDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">putDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList">putS3TablesConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">resetDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList">resetS3TablesConfigurationList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterQueueS3Configuration` <a name="putDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```java
public void putDeadLetterQueueS3Configuration(KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `putS3TablesConfigurationList` <a name="putS3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList"></a>

```java
public void putS3TablesConfigurationList(IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>>

---

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```java
public void resetDataFreshnessInSeconds()
```

##### `resetDeadLetterQueueS3Configuration` <a name="resetDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```java
public void resetDeadLetterQueueS3Configuration()
```

##### `resetS3TablesConfigurationList` <a name="resetS3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList"></a>

```java
public void resetS3TablesConfigurationList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList">s3TablesConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">deadLetterQueueS3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput">s3TablesConfigurationListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterQueueS3Configuration`<sup>Required</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference getDeadLetterQueueS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `s3TablesConfigurationList`<sup>Required</sup> <a name="s3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList getS3TablesConfigurationList();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a>

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```java
public java.lang.Number getDataFreshnessInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3ConfigurationInput`<sup>Optional</sup> <a name="deadLetterQueueS3ConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration getDeadLetterQueueS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `s3TablesConfigurationListInput`<sup>Optional</sup> <a name="s3TablesConfigurationListInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct> getS3TablesConfigurationListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>>

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference;

new KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields">putPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields">resetPartitionFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionFields` <a name="putPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields"></a>

```java
public void putPartitionFields(IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>>

---

##### `resetPartitionFields` <a name="resetPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields"></a>

```java
public void resetPartitionFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput">partitionFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList getPartitionFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a>

---

##### `partitionFieldsInput`<sup>Optional</sup> <a name="partitionFieldsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields> getPartitionFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList;

new KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference;

new KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName"></a>

```java
public void resetSourceName()
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform"></a>

```java
public void resetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput"></a>

```java
public java.lang.String getTransformInput();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList;

new KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>>

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference;

new KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn">resetTableBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec"></a>

```java
public void putPartitionSpec(KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec"></a>

```java
public void resetPartitionSpec()
```

##### `resetTableBucketArn` <a name="resetTableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn"></a>

```java
public void resetTableBucketArn()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput">partitionSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput">tableBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec"></a>

```java
public KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a>

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec getPartitionSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---

##### `tableBucketArnInput`<sup>Optional</sup> <a name="tableBucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput"></a>

```java
public java.lang.String getTableBucketArnInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn"></a>

```java
public java.lang.String getTableBucketArn();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>

---


### KinesisChannelStreamConfigurationListRecordConfigurationOutputReference <a name="KinesisChannelStreamConfigurationListRecordConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference;

new KinesisChannelStreamConfigurationListRecordConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn">resetGsrSchemaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGsrSchemaArn` <a name="resetGsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn"></a>

```java
public void resetGsrSchemaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput">gsrSchemaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput">recordFormatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn">gsrSchemaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType">recordFormatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gsrSchemaArnInput`<sup>Optional</sup> <a name="gsrSchemaArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput"></a>

```java
public java.lang.String getGsrSchemaArnInput();
```

- *Type:* java.lang.String

---

##### `recordFormatTypeInput`<sup>Optional</sup> <a name="recordFormatTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput"></a>

```java
public java.lang.String getRecordFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `gsrSchemaArn`<sup>Required</sup> <a name="gsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn"></a>

```java
public java.lang.String getGsrSchemaArn();
```

- *Type:* java.lang.String

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType"></a>

```java
public java.lang.String getRecordFormatType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelStreamConfigurationListRecordConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---


### KinesisChannelStreamConfigurationListStructList <a name="KinesisChannelStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelStreamConfigurationListStructList;

new KinesisChannelStreamConfigurationListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get"></a>

```java
public KinesisChannelStreamConfigurationListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisChannelStreamConfigurationListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>>

---


### KinesisChannelStreamConfigurationListStructOutputReference <a name="KinesisChannelStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelStreamConfigurationListStructOutputReference;

new KinesisChannelStreamConfigurationListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration">putRecordConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordConfiguration` <a name="putRecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration"></a>

```java
public void putRecordConfiguration(KinesisChannelStreamConfigurationListRecordConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration">recordConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput">recordConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordConfiguration`<sup>Required</sup> <a name="recordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration"></a>

```java
public KinesisChannelStreamConfigurationListRecordConfigurationOutputReference getRecordConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a>

---

##### `recordConfigurationInput`<sup>Optional</sup> <a name="recordConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput"></a>

```java
public IResolvable|KinesisChannelStreamConfigurationListRecordConfiguration getRecordConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelStreamConfigurationListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct">KinesisChannelStreamConfigurationListStruct</a>

---


### KinesisChannelTagsList <a name="KinesisChannelTagsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelTagsList;

new KinesisChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get"></a>

```java
public KinesisChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>>

---


### KinesisChannelTagsOutputReference <a name="KinesisChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_channel.KinesisChannelTagsOutputReference;

new KinesisChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags">KinesisChannelTags</a>

---



