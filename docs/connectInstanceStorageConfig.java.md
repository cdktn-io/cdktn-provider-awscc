# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .resourceType(java.lang.String)
    .storageType(java.lang.String)
//  .kinesisFirehoseConfig(ConnectInstanceStorageConfigKinesisFirehoseConfig)
//  .kinesisStreamConfig(ConnectInstanceStorageConfigKinesisStreamConfig)
//  .kinesisVideoStreamConfig(ConnectInstanceStorageConfigKinesisVideoStreamConfig)
//  .s3Config(ConnectInstanceStorageConfigS3Config)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisFirehoseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisStreamConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.kinesisVideoStreamConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.s3Config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig">putKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig">putKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig">resetKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig">resetKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig">resetKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config">resetS3Config</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKinesisFirehoseConfig` <a name="putKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig"></a>

```java
public void putKinesisFirehoseConfig(ConnectInstanceStorageConfigKinesisFirehoseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig"></a>

```java
public void putKinesisStreamConfig(ConnectInstanceStorageConfigKinesisStreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `putKinesisVideoStreamConfig` <a name="putKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig"></a>

```java
public void putKinesisVideoStreamConfig(ConnectInstanceStorageConfigKinesisVideoStreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config"></a>

```java
public void putS3Config(ConnectInstanceStorageConfigS3Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `resetKinesisFirehoseConfig` <a name="resetKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig"></a>

```java
public void resetKinesisFirehoseConfig()
```

##### `resetKinesisStreamConfig` <a name="resetKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig"></a>

```java
public void resetKinesisStreamConfig()
```

##### `resetKinesisVideoStreamConfig` <a name="resetKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig"></a>

```java
public void resetKinesisVideoStreamConfig()
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config"></a>

```java
public void resetS3Config()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfig;

ConnectInstanceStorageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectInstanceStorageConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectInstanceStorageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput">kinesisFirehoseConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput">kinesisVideoStreamConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput">s3ConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference getKinesisFirehoseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisStreamConfigOutputReference getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference getKinesisVideoStreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config"></a>

```java
public ConnectInstanceStorageConfigS3ConfigOutputReference getS3Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseConfigInput`<sup>Optional</sup> <a name="kinesisFirehoseConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisFirehoseConfig getKinesisFirehoseConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisStreamConfig getKinesisStreamConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `kinesisVideoStreamConfigInput`<sup>Optional</sup> <a name="kinesisVideoStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisVideoStreamConfig getKinesisVideoStreamConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigS3Config getS3ConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigConfig;

ConnectInstanceStorageConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .resourceType(java.lang.String)
    .storageType(java.lang.String)
//  .kinesisFirehoseConfig(ConnectInstanceStorageConfigKinesisFirehoseConfig)
//  .kinesisStreamConfig(ConnectInstanceStorageConfigKinesisStreamConfig)
//  .kinesisVideoStreamConfig(ConnectInstanceStorageConfigKinesisVideoStreamConfig)
//  .s3Config(ConnectInstanceStorageConfigS3Config)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisFirehoseConfig getKinesisFirehoseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisStreamConfig getKinesisStreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisVideoStreamConfig getKinesisVideoStreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config"></a>

```java
public ConnectInstanceStorageConfigS3Config getS3Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

### ConnectInstanceStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisFirehoseConfig;

ConnectInstanceStorageConfigKinesisFirehoseConfig.builder()
//  .firehoseArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | An ARN is a unique AWS resource identifier. |

---

##### `firehoseArn`<sup>Optional</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}

---

### ConnectInstanceStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisStreamConfig;

ConnectInstanceStorageConfigKinesisStreamConfig.builder()
//  .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | An ARN is a unique AWS resource identifier. |

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisVideoStreamConfig;

ConnectInstanceStorageConfigKinesisVideoStreamConfig.builder()
//  .encryptionConfig(ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig)
//  .prefix(java.lang.String)
//  .retentionPeriodHours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours. |

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```java
public java.lang.Number getRetentionPeriodHours();
```

- *Type:* java.lang.Number

Number of hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;

ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.builder()
//  .encryptionType(java.lang.String)
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Specifies the encryption key id. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

### ConnectInstanceStorageConfigS3Config <a name="ConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigS3Config;

ConnectInstanceStorageConfigS3Config.builder()
//  .bucketName(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .encryptionConfig(ConnectInstanceStorageConfigS3ConfigEncryptionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | A name for the S3 Bucket. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

A name for the S3 Bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigS3ConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

### ConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigS3ConfigEncryptionConfig;

ConnectInstanceStorageConfigS3ConfigEncryptionConfig.builder()
//  .encryptionType(java.lang.String)
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Specifies the encryption key id. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference;

new ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn">resetFirehoseArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirehoseArn` <a name="resetFirehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn"></a>

```java
public void resetFirehoseArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">firehoseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```java
public java.lang.String getFirehoseArnInput();
```

- *Type:* java.lang.String

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisFirehoseConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### ConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference;

new ConnectInstanceStorageConfigKinesisStreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn"></a>

```java
public void resetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisStreamConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;

new ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference;

new ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours">resetRetentionPeriodHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetRetentionPeriodHours` <a name="resetRetentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours"></a>

```java
public void resetRetentionPeriodHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">retentionPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodHoursInput`<sup>Optional</sup> <a name="retentionPeriodHoursInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```java
public java.lang.Number getRetentionPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```java
public java.lang.Number getRetentionPeriodHours();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigKinesisVideoStreamConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference;

new ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigS3ConfigEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance_storage_config.ConnectInstanceStorageConfigS3ConfigOutputReference;

new ConnectInstanceStorageConfigS3ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(ConnectInstanceStorageConfigS3ConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```java
public ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```java
public IResolvable|ConnectInstanceStorageConfigS3ConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceStorageConfigS3Config getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---



