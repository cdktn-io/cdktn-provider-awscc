# `workspacesinstancesVolume` Submodule <a name="`workspacesinstancesVolume` Submodule" id="@cdktn/provider-awscc.workspacesinstancesVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesVolume <a name="WorkspacesinstancesVolume" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume awscc_workspacesinstances_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolume;

WorkspacesinstancesVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZone(java.lang.String)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .sizeInGb(java.lang.Number)
//  .snapshotId(java.lang.String)
//  .tagSpecifications(IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications>)
//  .throughput(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.tagSpecifications">tagSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>></code> | The tags passed to EBS volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.throughput">throughput</a></code> | <code>java.lang.Number</code> | The throughput to provision for a volume, with a maximum of 1,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.volumeType">volumeType</a></code> | <code>java.lang.String</code> | The volume type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#availability_zone WorkspacesinstancesVolume#availability_zone}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#encrypted WorkspacesinstancesVolume#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.iops"></a>

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#iops WorkspacesinstancesVolume#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#kms_key_id WorkspacesinstancesVolume#kms_key_id}

---

##### `sizeInGb`<sup>Optional</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.sizeInGb"></a>

- *Type:* java.lang.Number

The size of the volume, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#size_in_gb WorkspacesinstancesVolume#size_in_gb}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

The snapshot from which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#snapshot_id WorkspacesinstancesVolume#snapshot_id}

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.tagSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>>

The tags passed to EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#tag_specifications WorkspacesinstancesVolume#tag_specifications}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.throughput"></a>

- *Type:* java.lang.Number

The throughput to provision for a volume, with a maximum of 1,000 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#throughput WorkspacesinstancesVolume#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.volumeType"></a>

- *Type:* java.lang.String

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#volume_type WorkspacesinstancesVolume#volume_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb">resetSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications"></a>

```java
public void putTagSpecifications(IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>>

---

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSizeInGb` <a name="resetSizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb"></a>

```java
public void resetSizeInGb()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications"></a>

```java
public void resetTagSpecifications()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType"></a>

```java
public void resetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolume;

WorkspacesinstancesVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolume;

WorkspacesinstancesVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolume;

WorkspacesinstancesVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolume;

WorkspacesinstancesVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspacesinstancesVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspacesinstancesVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspacesinstancesVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications"></a>

```java
public WorkspacesinstancesVolumeTagSpecificationsList getTagSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications> getTagSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>>

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesVolumeConfig <a name="WorkspacesinstancesVolumeConfig" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeConfig;

WorkspacesinstancesVolumeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZone(java.lang.String)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .sizeInGb(java.lang.Number)
//  .snapshotId(java.lang.String)
//  .tagSpecifications(IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications>)
//  .throughput(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications">tagSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>></code> | The tags passed to EBS volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | The throughput to provision for a volume, with a maximum of 1,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | The volume type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#availability_zone WorkspacesinstancesVolume#availability_zone}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#encrypted WorkspacesinstancesVolume#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#iops WorkspacesinstancesVolume#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#kms_key_id WorkspacesinstancesVolume#kms_key_id}

---

##### `sizeInGb`<sup>Optional</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

The size of the volume, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#size_in_gb WorkspacesinstancesVolume#size_in_gb}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot from which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#snapshot_id WorkspacesinstancesVolume#snapshot_id}

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications> getTagSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>>

The tags passed to EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#tag_specifications WorkspacesinstancesVolume#tag_specifications}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

The throughput to provision for a volume, with a maximum of 1,000 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#throughput WorkspacesinstancesVolume#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#volume_type WorkspacesinstancesVolume#volume_type}

---

### WorkspacesinstancesVolumeTagSpecifications <a name="WorkspacesinstancesVolumeTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecifications;

WorkspacesinstancesVolumeTagSpecifications.builder()
//  .resourceType(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecificationsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>></code> | The tags to apply to the resource. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecificationsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>>

The tags to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#tags WorkspacesinstancesVolume#tags}

---

### WorkspacesinstancesVolumeTagSpecificationsTags <a name="WorkspacesinstancesVolumeTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecificationsTags;

WorkspacesinstancesVolumeTagSpecificationsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#key WorkspacesinstancesVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume#value WorkspacesinstancesVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesVolumeTagSpecificationsList <a name="WorkspacesinstancesVolumeTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecificationsList;

new WorkspacesinstancesVolumeTagSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get"></a>

```java
public WorkspacesinstancesVolumeTagSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>>

---


### WorkspacesinstancesVolumeTagSpecificationsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecificationsOutputReference;

new WorkspacesinstancesVolumeTagSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecificationsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>>

---

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags"></a>

```java
public WorkspacesinstancesVolumeTagSpecificationsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecificationsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesinstancesVolumeTagSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>

---


### WorkspacesinstancesVolumeTagSpecificationsTagsList <a name="WorkspacesinstancesVolumeTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecificationsTagsList;

new WorkspacesinstancesVolumeTagSpecificationsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get"></a>

```java
public WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesinstancesVolumeTagSpecificationsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>>

---


### WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesinstances_volume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference;

new WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>

---



