# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktn/provider-awscc.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .s3BucketName(java.lang.String)
//  .configSnapshotDeliveryProperties(ConfigDeliveryChannelConfigSnapshotDeliveryProperties)
//  .name(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .s3KmsKeyArn(java.lang.String)
//  .snsTopicArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName"></a>

- *Type:* java.lang.String

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `configSnapshotDeliveryProperties`<sup>Optional</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.configSnapshotDeliveryProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* java.lang.String

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties">putConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties">resetConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">resetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigSnapshotDeliveryProperties` <a name="putConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties"></a>

```java
public void putConfigSnapshotDeliveryProperties(ConfigDeliveryChannelConfigSnapshotDeliveryProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `resetConfigSnapshotDeliveryProperties` <a name="resetConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties"></a>

```java
public void resetConfigSnapshotDeliveryProperties()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```java
public void resetName()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```

##### `resetS3KmsKeyArn` <a name="resetS3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```java
public void resetS3KmsKeyArn()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigDeliveryChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigDeliveryChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput">configSnapshotDeliveryPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3KmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configSnapshotDeliveryProperties`<sup>Required</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```java
public ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference getConfigSnapshotDeliveryProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configSnapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="configSnapshotDeliveryPropertiesInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput"></a>

```java
public IResolvable|ConfigDeliveryChannelConfigSnapshotDeliveryProperties getConfigSnapshotDeliveryPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyArnInput`<sup>Optional</sup> <a name="s3KmsKeyArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```java
public java.lang.String getS3KmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyArn`<sup>Required</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```java
public java.lang.String getS3KmsKeyArn();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannelConfig;

ConfigDeliveryChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .s3BucketName(java.lang.String)
//  .configSnapshotDeliveryProperties(ConfigDeliveryChannelConfigSnapshotDeliveryProperties)
//  .name(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .s3KmsKeyArn(java.lang.String)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `configSnapshotDeliveryProperties`<sup>Optional</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties"></a>

```java
public ConfigDeliveryChannelConfigSnapshotDeliveryProperties getConfigSnapshotDeliveryProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```java
public java.lang.String getS3KmsKeyArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

### ConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="ConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties;

ConfigDeliveryChannelConfigSnapshotDeliveryProperties.builder()
//  .deliveryFrequency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency">deliveryFrequency</a></code> | <code>java.lang.String</code> | The frequency with which AWS Config delivers configuration snapshots. |

---

##### `deliveryFrequency`<sup>Optional</sup> <a name="deliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```java
public java.lang.String getDeliveryFrequency();
```

- *Type:* java.lang.String

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_delivery_channel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference;

new ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">resetDeliveryFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryFrequency` <a name="resetDeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```java
public void resetDeliveryFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">deliveryFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">deliveryFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryFrequencyInput`<sup>Optional</sup> <a name="deliveryFrequencyInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```java
public java.lang.String getDeliveryFrequencyInput();
```

- *Type:* java.lang.String

---

##### `deliveryFrequency`<sup>Required</sup> <a name="deliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```java
public java.lang.String getDeliveryFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigDeliveryChannelConfigSnapshotDeliveryProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



