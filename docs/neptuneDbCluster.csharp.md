# `neptuneDbCluster` Submodule <a name="`neptuneDbCluster` Submodule" id="@cdktn/provider-awscc.neptuneDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneDbCluster <a name="NeptuneDbCluster" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster awscc_neptune_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbCluster(Construct Scope, string Id, NeptuneDbClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig">NeptuneDbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig">NeptuneDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles">PutAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration">PutServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles">ResetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier">ResetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName">ResetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName">ResetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort">ResetDbPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports">ResetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled">ResetIamAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime">ResetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType">ResetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration">ResetServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier">ResetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedRoles` <a name="PutAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles"></a>

```csharp
private void PutAssociatedRoles(IResolvable|NeptuneDbClusterAssociatedRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---

##### `PutServerlessScalingConfiguration` <a name="PutServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration"></a>

```csharp
private void PutServerlessScalingConfiguration(NeptuneDbClusterServerlessScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|NeptuneDbClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---

##### `ResetAssociatedRoles` <a name="ResetAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles"></a>

```csharp
private void ResetAssociatedRoles()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier"></a>

```csharp
private void ResetDbClusterIdentifier()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName"></a>

```csharp
private void ResetDbClusterParameterGroupName()
```

##### `ResetDbInstanceParameterGroupName` <a name="ResetDbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName"></a>

```csharp
private void ResetDbInstanceParameterGroupName()
```

##### `ResetDbPort` <a name="ResetDbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort"></a>

```csharp
private void ResetDbPort()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports"></a>

```csharp
private void ResetEnableCloudwatchLogsExports()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier"></a>

```csharp
private void ResetGlobalClusterIdentifier()
```

##### `ResetIamAuthEnabled` <a name="ResetIamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled"></a>

```csharp
private void ResetIamAuthEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime"></a>

```csharp
private void ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType"></a>

```csharp
private void ResetRestoreType()
```

##### `ResetServerlessScalingConfiguration` <a name="ResetServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration"></a>

```csharp
private void ResetServerlessScalingConfiguration()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier"></a>

```csharp
private void ResetSourceDbClusterIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime"></a>

```csharp
private void ResetUseLatestRestorableTime()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NeptuneDbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NeptuneDbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NeptuneDbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NeptuneDbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneDbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles">AssociatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint">ReadEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration">ServerlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput">AssociatedRolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput">DbInstanceParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput">DbPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput">IamAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput">ServerlessScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort">DbPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType">RestoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedRoles`<sup>Required</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles"></a>

```csharp
public NeptuneDbClusterAssociatedRolesList AssociatedRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a>

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `ReadEndpoint`<sup>Required</sup> <a name="ReadEndpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint"></a>

```csharp
public string ReadEndpoint { get; }
```

- *Type:* string

---

##### `ServerlessScalingConfiguration`<sup>Required</sup> <a name="ServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration"></a>

```csharp
public NeptuneDbClusterServerlessScalingConfigurationOutputReference ServerlessScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags"></a>

```csharp
public NeptuneDbClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a>

---

##### `AssociatedRolesInput`<sup>Optional</sup> <a name="AssociatedRolesInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput"></a>

```csharp
public IResolvable|NeptuneDbClusterAssociatedRoles[] AssociatedRolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshotInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput"></a>

```csharp
public string DbClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="DbInstanceParameterGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```csharp
public string DbInstanceParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbPortInput`<sup>Optional</sup> <a name="DbPortInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput"></a>

```csharp
public double DbPortInput { get; }
```

- *Type:* double

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnableCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput"></a>

```csharp
public string GlobalClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IamAuthEnabledInput`<sup>Optional</sup> <a name="IamAuthEnabledInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput"></a>

```csharp
public bool|IResolvable IamAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput"></a>

```csharp
public string RestoreToTimeInput { get; }
```

- *Type:* string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput"></a>

```csharp
public string RestoreTypeInput { get; }
```

- *Type:* string

---

##### `ServerlessScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessScalingConfigurationInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput"></a>

```csharp
public IResolvable|NeptuneDbClusterServerlessScalingConfiguration ServerlessScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput"></a>

```csharp
public string SourceDbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput"></a>

```csharp
public bool|IResolvable StorageEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput"></a>

```csharp
public IResolvable|NeptuneDbClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput"></a>

```csharp
public bool|IResolvable UseLatestRestorableTimeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupName`<sup>Required</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; }
```

- *Type:* string

---

##### `DbPort`<sup>Required</sup> <a name="DbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort"></a>

```csharp
public double DbPort { get; }
```

- *Type:* double

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; }
```

- *Type:* string

---

##### `IamAuthEnabled`<sup>Required</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled"></a>

```csharp
public bool|IResolvable IamAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; }
```

- *Type:* string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType"></a>

```csharp
public string RestoreType { get; }
```

- *Type:* string

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier"></a>

```csharp
public string SourceDbClusterIdentifier { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime"></a>

```csharp
public bool|IResolvable UseLatestRestorableTime { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneDbClusterAssociatedRoles <a name="NeptuneDbClusterAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterAssociatedRoles {
    string FeatureName = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName">FeatureName</a></code> | <code>string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName"></a>

```csharp
public string FeatureName { get; set; }
```

- *Type:* string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#feature_name NeptuneDbCluster#feature_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#role_arn NeptuneDbCluster#role_arn}

---

### NeptuneDbClusterConfig <a name="NeptuneDbClusterConfig" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|NeptuneDbClusterAssociatedRoles[] AssociatedRoles = null,
    string[] AvailabilityZones = null,
    double BackupRetentionPeriod = null,
    bool|IResolvable CopyTagsToSnapshot = null,
    string DbClusterIdentifier = null,
    string DbClusterParameterGroupName = null,
    string DbInstanceParameterGroupName = null,
    double DbPort = null,
    string DbSubnetGroupName = null,
    bool|IResolvable DeletionProtection = null,
    string[] EnableCloudwatchLogsExports = null,
    string EngineVersion = null,
    string GlobalClusterIdentifier = null,
    bool|IResolvable IamAuthEnabled = null,
    string KmsKeyId = null,
    string NetworkType = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    string RestoreToTime = null,
    string RestoreType = null,
    NeptuneDbClusterServerlessScalingConfiguration ServerlessScalingConfiguration = null,
    string SnapshotIdentifier = null,
    string SourceDbClusterIdentifier = null,
    bool|IResolvable StorageEncrypted = null,
    IResolvable|NeptuneDbClusterTags[] Tags = null,
    bool|IResolvable UseLatestRestorableTime = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles">AssociatedRoles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | Specifies the number of days for which automatic DB snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort">DbPort</a></code> | <code>double</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether or not the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | Specifies a list of log types that are enabled for export to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Indicates the database engine version. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | The ID of the Neptune global database to which this new DB cluster should be added. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType">RestoreType</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration">ServerlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>string</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | The tags assigned to this cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Provides a list of VPC security groups that the DB cluster belongs to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedRoles`<sup>Optional</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles"></a>

```csharp
public IResolvable|NeptuneDbClusterAssociatedRoles[] AssociatedRoles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#associated_roles NeptuneDbCluster#associated_roles}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#availability_zones NeptuneDbCluster#availability_zones}

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

Specifies the number of days for which automatic DB snapshots are retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#backup_retention_period NeptuneDbCluster#backup_retention_period}

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default behaviour is not to copy them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#copy_tags_to_snapshot NeptuneDbCluster#copy_tags_to_snapshot}

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

The DB cluster identifier.

Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#db_cluster_identifier NeptuneDbCluster#db_cluster_identifier}

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; set; }
```

- *Type:* string

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#db_cluster_parameter_group_name NeptuneDbCluster#db_cluster_parameter_group_name}

---

##### `DbInstanceParameterGroupName`<sup>Optional</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; set; }
```

- *Type:* string

The name of the DB parameter group to apply to all instances of the DB cluster.

Used only in case of a major EngineVersion upgrade request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#db_instance_parameter_group_name NeptuneDbCluster#db_instance_parameter_group_name}

---

##### `DbPort`<sup>Optional</sup> <a name="DbPort" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort"></a>

```csharp
public double DbPort { get; set; }
```

- *Type:* double

The port number on which the DB instances in the DB cluster accept connections.

If not specified, the default port used is `8182`.

Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#db_port NeptuneDbCluster#db_port}

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#db_subnet_group_name NeptuneDbCluster#db_subnet_group_name}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether or not the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#deletion_protection NeptuneDbCluster#deletion_protection}

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

Specifies a list of log types that are enabled for export to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#enable_cloudwatch_logs_exports NeptuneDbCluster#enable_cloudwatch_logs_exports}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Indicates the database engine version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#engine_version NeptuneDbCluster#engine_version}

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; set; }
```

- *Type:* string

The ID of the Neptune global database to which this new DB cluster should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#global_cluster_identifier NeptuneDbCluster#global_cluster_identifier}

---

##### `IamAuthEnabled`<sup>Optional</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled"></a>

```csharp
public bool|IResolvable IamAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#iam_auth_enabled NeptuneDbCluster#iam_auth_enabled}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#kms_key_id NeptuneDbCluster#kms_key_id}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The network type of the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#network_type NeptuneDbCluster#network_type}

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#preferred_backup_window NeptuneDbCluster#preferred_backup_window}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#preferred_maintenance_window NeptuneDbCluster#preferred_maintenance_window}

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; set; }
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#restore_to_time NeptuneDbCluster#restore_to_time}

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType"></a>

```csharp
public string RestoreType { get; set; }
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#restore_type NeptuneDbCluster#restore_type}

---

##### `ServerlessScalingConfiguration`<sup>Optional</sup> <a name="ServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration"></a>

```csharp
public NeptuneDbClusterServerlessScalingConfiguration ServerlessScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#serverless_scaling_configuration NeptuneDbCluster#serverless_scaling_configuration}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.

After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.

However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#snapshot_identifier NeptuneDbCluster#snapshot_identifier}

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```csharp
public string SourceDbClusterIdentifier { get; set; }
```

- *Type:* string

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#source_db_cluster_identifier NeptuneDbCluster#source_db_cluster_identifier}

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the KmsKeyId property, then you must enable encryption and set this property to true.

If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.

If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.

If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#storage_encrypted NeptuneDbCluster#storage_encrypted}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags"></a>

```csharp
public IResolvable|NeptuneDbClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

The tags assigned to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#tags NeptuneDbCluster#tags}

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime"></a>

```csharp
public bool|IResolvable UseLatestRestorableTime { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#use_latest_restorable_time NeptuneDbCluster#use_latest_restorable_time}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Provides a list of VPC security groups that the DB cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#vpc_security_group_ids NeptuneDbCluster#vpc_security_group_ids}

---

### NeptuneDbClusterServerlessScalingConfiguration <a name="NeptuneDbClusterServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterServerlessScalingConfiguration {
    double MaxCapacity = null,
    double MinCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#max_capacity NeptuneDbCluster#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#min_capacity NeptuneDbCluster#min_capacity}

---

### NeptuneDbClusterTags <a name="NeptuneDbClusterTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#key NeptuneDbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_db_cluster#value NeptuneDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDbClusterAssociatedRolesList <a name="NeptuneDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterAssociatedRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get"></a>

```csharp
private NeptuneDbClusterAssociatedRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue"></a>

```csharp
public IResolvable|NeptuneDbClusterAssociatedRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>[]

---


### NeptuneDbClusterAssociatedRolesOutputReference <a name="NeptuneDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterAssociatedRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```csharp
private void ResetFeatureName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```csharp
public string FeatureNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NeptuneDbClusterAssociatedRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>

---


### NeptuneDbClusterServerlessScalingConfigurationOutputReference <a name="NeptuneDbClusterServerlessScalingConfigurationOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterServerlessScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NeptuneDbClusterServerlessScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---


### NeptuneDbClusterTagsList <a name="NeptuneDbClusterTagsList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get"></a>

```csharp
private NeptuneDbClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|NeptuneDbClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>[]

---


### NeptuneDbClusterTagsOutputReference <a name="NeptuneDbClusterTagsOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NeptuneDbClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NeptuneDbClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>

---



