# `storagegatewayVolume` Submodule <a name="`storagegatewayVolume` Submodule" id="@cdktn/provider-awscc.storagegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayVolume <a name="StoragegatewayVolume" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolume;

StoragegatewayVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .targetName(java.lang.String)
    .volumeSizeInBytes(java.lang.Number)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceVolumeArn(java.lang.String)
//  .tags(IResolvable|java.util.List<StoragegatewayVolumeTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.targetName">targetName</a></code> | <code>java.lang.String</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>></code> | A list of up to 50 tags to assign to the volume. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.targetName"></a>

- *Type:* java.lang.String

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.volumeSizeInBytes"></a>

- *Type:* java.lang.Number

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.sourceVolumeArn"></a>

- *Type:* java.lang.String

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>>

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn">resetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<StoragegatewayVolumeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>>

---

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetSourceVolumeArn` <a name="resetSourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn"></a>

```java
public void resetSourceVolumeArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolume;

StoragegatewayVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolume;

StoragegatewayVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolume;

StoragegatewayVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolume;

StoragegatewayVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StoragegatewayVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StoragegatewayVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn">volumeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus">volumeAttachmentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus">volumeStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes">volumeUsedInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput">sourceVolumeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput">volumeSizeInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags"></a>

```java
public StoragegatewayVolumeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a>

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `volumeArn`<sup>Required</sup> <a name="volumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn"></a>

```java
public java.lang.String getVolumeArn();
```

- *Type:* java.lang.String

---

##### `volumeAttachmentStatus`<sup>Required</sup> <a name="volumeAttachmentStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus"></a>

```java
public java.lang.String getVolumeAttachmentStatus();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `volumeStatus`<sup>Required</sup> <a name="volumeStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus"></a>

```java
public java.lang.String getVolumeStatus();
```

- *Type:* java.lang.String

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `volumeUsedInBytes`<sup>Required</sup> <a name="volumeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes"></a>

```java
public java.lang.Number getVolumeUsedInBytes();
```

- *Type:* java.lang.Number

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `sourceVolumeArnInput`<sup>Optional</sup> <a name="sourceVolumeArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput"></a>

```java
public java.lang.String getSourceVolumeArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput"></a>

```java
public IResolvable|java.util.List<StoragegatewayVolumeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>>

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInBytesInput`<sup>Optional</sup> <a name="volumeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput"></a>

```java
public java.lang.Number getVolumeSizeInBytesInput();
```

- *Type:* java.lang.Number

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `sourceVolumeArn`<sup>Required</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn"></a>

```java
public java.lang.String getSourceVolumeArn();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes"></a>

```java
public java.lang.Number getVolumeSizeInBytes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayVolumeConfig <a name="StoragegatewayVolumeConfig" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolumeConfig;

StoragegatewayVolumeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .targetName(java.lang.String)
    .volumeSizeInBytes(java.lang.Number)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceVolumeArn(java.lang.String)
//  .tags(IResolvable|java.util.List<StoragegatewayVolumeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName">targetName</a></code> | <code>java.lang.String</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>></code> | A list of up to 50 tags to assign to the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes"></a>

```java
public java.lang.Number getVolumeSizeInBytes();
```

- *Type:* java.lang.Number

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn"></a>

```java
public java.lang.String getSourceVolumeArn();
```

- *Type:* java.lang.String

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags"></a>

```java
public IResolvable|java.util.List<StoragegatewayVolumeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>>

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

### StoragegatewayVolumeTags <a name="StoragegatewayVolumeTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolumeTags;

StoragegatewayVolumeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#key StoragegatewayVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#value StoragegatewayVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayVolumeTagsList <a name="StoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolumeTagsList;

new StoragegatewayVolumeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get"></a>

```java
public StoragegatewayVolumeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StoragegatewayVolumeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>>

---


### StoragegatewayVolumeTagsOutputReference <a name="StoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_volume.StoragegatewayVolumeTagsOutputReference;

new StoragegatewayVolumeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewayVolumeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>

---



