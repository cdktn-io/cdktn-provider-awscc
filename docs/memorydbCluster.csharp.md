# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktn/provider-awscc.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster awscc_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbCluster(Construct Scope, string Id, MemorydbClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint">PutClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint">ResetClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering">ResetDataTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName">ResetMultiRegionClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">ResetNumReplicasPerShard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards">ResetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus">ResetSnsTopicStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterEndpoint` <a name="PutClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint"></a>

```csharp
private void PutClusterEndpoint(MemorydbClusterClusterEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|MemorydbClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetClusterEndpoint` <a name="ResetClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint"></a>

```csharp
private void ResetClusterEndpoint()
```

##### `ResetDataTiering` <a name="ResetDataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```csharp
private void ResetDataTiering()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```csharp
private void ResetFinalSnapshotName()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery"></a>

```csharp
private void ResetIpDiscovery()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetMultiRegionClusterName` <a name="ResetMultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName"></a>

```csharp
private void ResetMultiRegionClusterName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetNumReplicasPerShard` <a name="ResetNumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```csharp
private void ResetNumReplicasPerShard()
```

##### `ResetNumShards` <a name="ResetNumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```csharp
private void ResetNumShards()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```csharp
private void ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```csharp
private void ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```csharp
private void ResetSnapshotWindow()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```

##### `ResetSnsTopicStatus` <a name="ResetSnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus"></a>

```csharp
private void ResetSnsTopicStatus()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```csharp
private void ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```csharp
private void ResetTlsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MemorydbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MemorydbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MemorydbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MemorydbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemorydbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemorydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint">ClusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus">ParameterGroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput">AclNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput">ClusterEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput">DataTieringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput">MultiRegionClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">NumReplicasPerShardInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput">NumShardsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput">SnsTopicStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName">AclName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering">DataTiering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName">MultiRegionClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards">NumShards</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus">SnsTopicStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled">TlsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterEndpoint`<sup>Required</sup> <a name="ClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```csharp
public MemorydbClusterClusterEndpointOutputReference ClusterEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParameterGroupStatus`<sup>Required</sup> <a name="ParameterGroupStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus"></a>

```csharp
public string ParameterGroupStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags"></a>

```csharp
public MemorydbClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a>

---

##### `AclNameInput`<sup>Optional</sup> <a name="AclNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```csharp
public string AclNameInput { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClusterEndpointInput`<sup>Optional</sup> <a name="ClusterEndpointInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput"></a>

```csharp
public IResolvable|MemorydbClusterClusterEndpoint ClusterEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DataTieringInput`<sup>Optional</sup> <a name="DataTieringInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```csharp
public string DataTieringInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```csharp
public string FinalSnapshotNameInput { get; }
```

- *Type:* string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput"></a>

```csharp
public string IpDiscoveryInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `MultiRegionClusterNameInput`<sup>Optional</sup> <a name="MultiRegionClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput"></a>

```csharp
public string MultiRegionClusterNameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NumReplicasPerShardInput`<sup>Optional</sup> <a name="NumReplicasPerShardInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```csharp
public double NumReplicasPerShardInput { get; }
```

- *Type:* double

---

##### `NumShardsInput`<sup>Optional</sup> <a name="NumShardsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```csharp
public double NumShardsInput { get; }
```

- *Type:* double

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```csharp
public string[] SnapshotArnsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```csharp
public string SnapshotWindowInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicStatusInput`<sup>Optional</sup> <a name="SnsTopicStatusInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput"></a>

```csharp
public string SnsTopicStatusInput { get; }
```

- *Type:* string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```csharp
public string SubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```csharp
public IResolvable|MemorydbClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```csharp
public bool|IResolvable TlsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName"></a>

```csharp
public string AclName { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `DataTiering`<sup>Required</sup> <a name="DataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```csharp
public string DataTiering { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; }
```

- *Type:* string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `MultiRegionClusterName`<sup>Required</sup> <a name="MultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName"></a>

```csharp
public string MultiRegionClusterName { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NumReplicasPerShard`<sup>Required</sup> <a name="NumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```csharp
public double NumReplicasPerShard { get; }
```

- *Type:* double

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards"></a>

```csharp
public double NumShards { get; }
```

- *Type:* double

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; }
```

- *Type:* string[]

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SnsTopicStatus`<sup>Required</sup> <a name="SnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus"></a>

```csharp
public string SnsTopicStatus { get; }
```

- *Type:* string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; }
```

- *Type:* string

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```csharp
public bool|IResolvable TlsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterClusterEndpoint {

};
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AclName,
    string ClusterName,
    string NodeType,
    bool|IResolvable AutoMinorVersionUpgrade = null,
    MemorydbClusterClusterEndpoint ClusterEndpoint = null,
    string DataTiering = null,
    string Description = null,
    string Engine = null,
    string EngineVersion = null,
    string FinalSnapshotName = null,
    string IpDiscovery = null,
    string KmsKeyId = null,
    string MaintenanceWindow = null,
    string MultiRegionClusterName = null,
    string NetworkType = null,
    double NumReplicasPerShard = null,
    double NumShards = null,
    string ParameterGroupName = null,
    double Port = null,
    string[] SecurityGroupIds = null,
    string[] SnapshotArns = null,
    string SnapshotName = null,
    double SnapshotRetentionLimit = null,
    string SnapshotWindow = null,
    string SnsTopicArn = null,
    string SnsTopicStatus = null,
    string SubnetGroupName = null,
    IResolvable|MemorydbClusterTags[] Tags = null,
    bool|IResolvable TlsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName">AclName</a></code> | <code>string</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint">ClusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering">DataTiering</a></code> | <code>string</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine">Engine</a></code> | <code>string</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName">MultiRegionClusterName</a></code> | <code>string</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>double</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards">NumShards</a></code> | <code>double</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus">SnsTopicStatus</a></code> | <code>string</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">TlsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```csharp
public string AclName { get; set; }
```

- *Type:* string

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `ClusterEndpoint`<sup>Optional</sup> <a name="ClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint"></a>

```csharp
public MemorydbClusterClusterEndpoint ClusterEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `DataTiering`<sup>Optional</sup> <a name="DataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```csharp
public string DataTiering { get; set; }
```

- *Type:* string

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; set; }
```

- *Type:* string

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; set; }
```

- *Type:* string

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `MultiRegionClusterName`<sup>Optional</sup> <a name="MultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName"></a>

```csharp
public string MultiRegionClusterName { get; set; }
```

- *Type:* string

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `NumReplicasPerShard`<sup>Optional</sup> <a name="NumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```csharp
public double NumReplicasPerShard { get; set; }
```

- *Type:* double

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `NumShards`<sup>Optional</sup> <a name="NumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```csharp
public double NumShards { get; set; }
```

- *Type:* double

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; set; }
```

- *Type:* string[]

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; set; }
```

- *Type:* string

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `SnsTopicStatus`<sup>Optional</sup> <a name="SnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus"></a>

```csharp
public string SnsTopicStatus { get; set; }
```

- *Type:* string

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; set; }
```

- *Type:* string

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```csharp
public IResolvable|MemorydbClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```csharp
public bool|IResolvable TlsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

### MemorydbClusterTags <a name="MemorydbClusterTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key">Key</a></code> | <code>string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value">Value</a></code> | <code>string</code> | The tag's value. May be null. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#key MemorydbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#value MemorydbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterClusterEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MemorydbClusterClusterEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterTagsList <a name="MemorydbClusterTagsList" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get"></a>

```csharp
private MemorydbClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|MemorydbClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>[]

---


### MemorydbClusterTagsOutputReference <a name="MemorydbClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MemorydbClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MemorydbClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>

---



