# `eksCluster` Submodule <a name="`eksCluster` Submodule" id="@cdktn/provider-awscc.eksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCluster <a name="EksCluster" id="@cdktn/provider-awscc.eksCluster.EksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster awscc_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksCluster(Construct Scope, string Id, EksClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig">EksClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eksCluster.EksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig">EksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig">PutComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig">PutControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig">PutKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig">PutKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig">PutKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig">PutKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig">PutOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig">PutRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig">PutResourcesVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig">PutRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig">PutStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy">PutUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig">PutZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetBootstrapSelfManagedAddons">ResetBootstrapSelfManagedAddons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetComputeConfig">ResetComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetControlPlaneScalingConfig">ResetControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeApiServerConfig">ResetKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeControllerManagerConfig">ResetKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubernetesNetworkConfig">ResetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeSchedulerConfig">ResetKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetOutpostConfig">ResetOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetRemoteNetworkConfig">ResetRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetRollbackConfig">ResetRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetStorageConfig">ResetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.resetZonalShiftConfig">ResetZonalShiftConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eksCluster.EksCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eksCluster.EksCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eksCluster.EksCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eksCluster.EksCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eksCluster.EksCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eksCluster.EksCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCluster.EksCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig"></a>

```csharp
private void PutAccessConfig(EksClusterAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `PutComputeConfig` <a name="PutComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig"></a>

```csharp
private void PutComputeConfig(EksClusterComputeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `PutControlPlaneScalingConfig` <a name="PutControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig"></a>

```csharp
private void PutControlPlaneScalingConfig(EksClusterControlPlaneScalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putControlPlaneScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(IResolvable|EksClusterEncryptionConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]

---

##### `PutKubeApiServerConfig` <a name="PutKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig"></a>

```csharp
private void PutKubeApiServerConfig(EksClusterKubeApiServerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeApiServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `PutKubeControllerManagerConfig` <a name="PutKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig"></a>

```csharp
private void PutKubeControllerManagerConfig(EksClusterKubeControllerManagerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeControllerManagerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `PutKubernetesNetworkConfig` <a name="PutKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig"></a>

```csharp
private void PutKubernetesNetworkConfig(EksClusterKubernetesNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `PutKubeSchedulerConfig` <a name="PutKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig"></a>

```csharp
private void PutKubeSchedulerConfig(EksClusterKubeSchedulerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putKubeSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-awscc.eksCluster.EksCluster.putLogging"></a>

```csharp
private void PutLogging(EksClusterLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---

##### `PutOutpostConfig` <a name="PutOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig"></a>

```csharp
private void PutOutpostConfig(EksClusterOutpostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putOutpostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `PutRemoteNetworkConfig` <a name="PutRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig"></a>

```csharp
private void PutRemoteNetworkConfig(EksClusterRemoteNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRemoteNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `PutResourcesVpcConfig` <a name="PutResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig"></a>

```csharp
private void PutResourcesVpcConfig(EksClusterResourcesVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putResourcesVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---

##### `PutRollbackConfig` <a name="PutRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig"></a>

```csharp
private void PutRollbackConfig(EksClusterRollbackConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putRollbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---

##### `PutStorageConfig` <a name="PutStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig"></a>

```csharp
private void PutStorageConfig(EksClusterStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eksCluster.EksCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|EksClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]

---

##### `PutUpgradePolicy` <a name="PutUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy"></a>

```csharp
private void PutUpgradePolicy(EksClusterUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `PutZonalShiftConfig` <a name="PutZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig"></a>

```csharp
private void PutZonalShiftConfig(EksClusterZonalShiftConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksCluster.putZonalShiftConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetBootstrapSelfManagedAddons` <a name="ResetBootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetBootstrapSelfManagedAddons"></a>

```csharp
private void ResetBootstrapSelfManagedAddons()
```

##### `ResetComputeConfig` <a name="ResetComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetComputeConfig"></a>

```csharp
private void ResetComputeConfig()
```

##### `ResetControlPlaneScalingConfig` <a name="ResetControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetControlPlaneScalingConfig"></a>

```csharp
private void ResetControlPlaneScalingConfig()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetKubeApiServerConfig` <a name="ResetKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeApiServerConfig"></a>

```csharp
private void ResetKubeApiServerConfig()
```

##### `ResetKubeControllerManagerConfig` <a name="ResetKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeControllerManagerConfig"></a>

```csharp
private void ResetKubeControllerManagerConfig()
```

##### `ResetKubernetesNetworkConfig` <a name="ResetKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubernetesNetworkConfig"></a>

```csharp
private void ResetKubernetesNetworkConfig()
```

##### `ResetKubeSchedulerConfig` <a name="ResetKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetKubeSchedulerConfig"></a>

```csharp
private void ResetKubeSchedulerConfig()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOutpostConfig` <a name="ResetOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetOutpostConfig"></a>

```csharp
private void ResetOutpostConfig()
```

##### `ResetRemoteNetworkConfig` <a name="ResetRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetRemoteNetworkConfig"></a>

```csharp
private void ResetRemoteNetworkConfig()
```

##### `ResetRollbackConfig` <a name="ResetRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetRollbackConfig"></a>

```csharp
private void ResetRollbackConfig()
```

##### `ResetStorageConfig` <a name="ResetStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetStorageConfig"></a>

```csharp
private void ResetStorageConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetUpgradePolicy"></a>

```csharp
private void ResetUpgradePolicy()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetZonalShiftConfig` <a name="ResetZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.resetZonalShiftConfig"></a>

```csharp
private void ResetZonalShiftConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EksCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eksCluster.EksCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EksCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EksCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eksCluster.EksCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EksCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.certificateAuthorityData">CertificateAuthorityData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterSecurityGroupId">ClusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfig">ControlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList">EksClusterEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigKeyArn">EncryptionConfigKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfig">KubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfig">KubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfig">KubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference">EksClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.openIdConnectIssuerUrl">OpenIdConnectIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfig">OutpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfig">RemoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfig">ResourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference">EksClusterResourcesVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfig">RollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference">EksClusterRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList">EksClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfig">ZonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfigInput">AccessConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput">BootstrapSelfManagedAddonsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfigInput">ComputeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfigInput">ControlPlaneScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.forceInput">ForceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfigInput">KubeApiServerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfigInput">KubeControllerManagerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfigInput">KubernetesNetworkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfigInput">KubeSchedulerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.loggingInput">LoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfigInput">OutpostConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfigInput">RemoteNetworkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfigInput">ResourcesVpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfigInput">RollbackConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfigInput">StorageConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfigInput">ZonalShiftConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddons">BootstrapSelfManagedAddons</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfig"></a>

```csharp
public EksClusterAccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityData`<sup>Required</sup> <a name="CertificateAuthorityData" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.certificateAuthorityData"></a>

```csharp
public string CertificateAuthorityData { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterSecurityGroupId`<sup>Required</sup> <a name="ClusterSecurityGroupId" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.clusterSecurityGroupId"></a>

```csharp
public string ClusterSecurityGroupId { get; }
```

- *Type:* string

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfig"></a>

```csharp
public EksClusterComputeConfigOutputReference ComputeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a>

---

##### `ControlPlaneScalingConfig`<sup>Required</sup> <a name="ControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfig"></a>

```csharp
public EksClusterControlPlaneScalingConfigOutputReference ControlPlaneScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfig"></a>

```csharp
public EksClusterEncryptionConfigList EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList">EksClusterEncryptionConfigList</a>

---

##### `EncryptionConfigKeyArn`<sup>Required</sup> <a name="EncryptionConfigKeyArn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigKeyArn"></a>

```csharp
public string EncryptionConfigKeyArn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubeApiServerConfig`<sup>Required</sup> <a name="KubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfig"></a>

```csharp
public EksClusterKubeApiServerConfigOutputReference KubeApiServerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a>

---

##### `KubeControllerManagerConfig`<sup>Required</sup> <a name="KubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfig"></a>

```csharp
public EksClusterKubeControllerManagerConfigOutputReference KubeControllerManagerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a>

---

##### `KubernetesNetworkConfig`<sup>Required</sup> <a name="KubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfig"></a>

```csharp
public EksClusterKubernetesNetworkConfigOutputReference KubernetesNetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `KubeSchedulerConfig`<sup>Required</sup> <a name="KubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfig"></a>

```csharp
public EksClusterKubeSchedulerConfigOutputReference KubeSchedulerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.logging"></a>

```csharp
public EksClusterLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference">EksClusterLoggingOutputReference</a>

---

##### `OpenIdConnectIssuerUrl`<sup>Required</sup> <a name="OpenIdConnectIssuerUrl" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.openIdConnectIssuerUrl"></a>

```csharp
public string OpenIdConnectIssuerUrl { get; }
```

- *Type:* string

---

##### `OutpostConfig`<sup>Required</sup> <a name="OutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfig"></a>

```csharp
public EksClusterOutpostConfigOutputReference OutpostConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a>

---

##### `RemoteNetworkConfig`<sup>Required</sup> <a name="RemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfig"></a>

```csharp
public EksClusterRemoteNetworkConfigOutputReference RemoteNetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a>

---

##### `ResourcesVpcConfig`<sup>Required</sup> <a name="ResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfig"></a>

```csharp
public EksClusterResourcesVpcConfigOutputReference ResourcesVpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference">EksClusterResourcesVpcConfigOutputReference</a>

---

##### `RollbackConfig`<sup>Required</sup> <a name="RollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfig"></a>

```csharp
public EksClusterRollbackConfigOutputReference RollbackConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference">EksClusterRollbackConfigOutputReference</a>

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfig"></a>

```csharp
public EksClusterStorageConfigOutputReference StorageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tags"></a>

```csharp
public EksClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList">EksClusterTagsList</a>

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicy"></a>

```csharp
public EksClusterUpgradePolicyOutputReference UpgradePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a>

---

##### `ZonalShiftConfig`<sup>Required</sup> <a name="ZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfig"></a>

```csharp
public EksClusterZonalShiftConfigOutputReference ZonalShiftConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.accessConfigInput"></a>

```csharp
public IResolvable|EksClusterAccessConfig AccessConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `BootstrapSelfManagedAddonsInput`<sup>Optional</sup> <a name="BootstrapSelfManagedAddonsInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput"></a>

```csharp
public bool|IResolvable BootstrapSelfManagedAddonsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComputeConfigInput`<sup>Optional</sup> <a name="ComputeConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.computeConfigInput"></a>

```csharp
public IResolvable|EksClusterComputeConfig ComputeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `ControlPlaneScalingConfigInput`<sup>Optional</sup> <a name="ControlPlaneScalingConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.controlPlaneScalingConfigInput"></a>

```csharp
public IResolvable|EksClusterControlPlaneScalingConfig ControlPlaneScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.encryptionConfigInput"></a>

```csharp
public IResolvable|EksClusterEncryptionConfig[] EncryptionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.forceInput"></a>

```csharp
public bool|IResolvable ForceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KubeApiServerConfigInput`<sup>Optional</sup> <a name="KubeApiServerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeApiServerConfigInput"></a>

```csharp
public IResolvable|EksClusterKubeApiServerConfig KubeApiServerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `KubeControllerManagerConfigInput`<sup>Optional</sup> <a name="KubeControllerManagerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeControllerManagerConfigInput"></a>

```csharp
public IResolvable|EksClusterKubeControllerManagerConfig KubeControllerManagerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `KubernetesNetworkConfigInput`<sup>Optional</sup> <a name="KubernetesNetworkConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubernetesNetworkConfigInput"></a>

```csharp
public IResolvable|EksClusterKubernetesNetworkConfig KubernetesNetworkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `KubeSchedulerConfigInput`<sup>Optional</sup> <a name="KubeSchedulerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.kubeSchedulerConfigInput"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfig KubeSchedulerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.loggingInput"></a>

```csharp
public IResolvable|EksClusterLogging LoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutpostConfigInput`<sup>Optional</sup> <a name="OutpostConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.outpostConfigInput"></a>

```csharp
public IResolvable|EksClusterOutpostConfig OutpostConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `RemoteNetworkConfigInput`<sup>Optional</sup> <a name="RemoteNetworkConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.remoteNetworkConfigInput"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfig RemoteNetworkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `ResourcesVpcConfigInput`<sup>Optional</sup> <a name="ResourcesVpcConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.resourcesVpcConfigInput"></a>

```csharp
public IResolvable|EksClusterResourcesVpcConfig ResourcesVpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RollbackConfigInput`<sup>Optional</sup> <a name="RollbackConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.rollbackConfigInput"></a>

```csharp
public IResolvable|EksClusterRollbackConfig RollbackConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---

##### `StorageConfigInput`<sup>Optional</sup> <a name="StorageConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.storageConfigInput"></a>

```csharp
public IResolvable|EksClusterStorageConfig StorageConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tagsInput"></a>

```csharp
public IResolvable|EksClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.upgradePolicyInput"></a>

```csharp
public IResolvable|EksClusterUpgradePolicy UpgradePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZonalShiftConfigInput`<sup>Optional</sup> <a name="ZonalShiftConfigInput" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.zonalShiftConfigInput"></a>

```csharp
public IResolvable|EksClusterZonalShiftConfig ZonalShiftConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `BootstrapSelfManagedAddons`<sup>Required</sup> <a name="BootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.bootstrapSelfManagedAddons"></a>

```csharp
public bool|IResolvable BootstrapSelfManagedAddons { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.force"></a>

```csharp
public bool|IResolvable Force { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eksCluster.EksCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksClusterAccessConfig <a name="EksClusterAccessConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterAccessConfig {
    string AuthenticationMode = null,
    bool|IResolvable BootstrapClusterCreatorAdminPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Specify the authentication mode that should be used to create your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions">BootstrapClusterCreatorAdminPermissions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster. |

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Specify the authentication mode that should be used to create your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}

---

##### `BootstrapClusterCreatorAdminPermissions`<sup>Optional</sup> <a name="BootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions"></a>

```csharp
public bool|IResolvable BootstrapClusterCreatorAdminPermissions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}

---

### EksClusterComputeConfig <a name="EksClusterComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterComputeConfig {
    bool|IResolvable Enabled = null,
    string[] NodePools = null,
    string NodeRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodePools">NodePools</a></code> | <code>string[]</code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodeRoleArn">NodeRoleArn</a></code> | <code>string</code> | Todo: add description. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

##### `NodePools`<sup>Optional</sup> <a name="NodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodePools"></a>

```csharp
public string[] NodePools { get; set; }
```

- *Type:* string[]

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}

---

##### `NodeRoleArn`<sup>Optional</sup> <a name="NodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig.property.nodeRoleArn"></a>

```csharp
public string NodeRoleArn { get; set; }
```

- *Type:* string

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}

---

### EksClusterConfig <a name="EksClusterConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    EksClusterResourcesVpcConfig ResourcesVpcConfig,
    string RoleArn,
    EksClusterAccessConfig AccessConfig = null,
    bool|IResolvable BootstrapSelfManagedAddons = null,
    EksClusterComputeConfig ComputeConfig = null,
    EksClusterControlPlaneScalingConfig ControlPlaneScalingConfig = null,
    bool|IResolvable DeletionProtection = null,
    IResolvable|EksClusterEncryptionConfig[] EncryptionConfig = null,
    bool|IResolvable Force = null,
    EksClusterKubeApiServerConfig KubeApiServerConfig = null,
    EksClusterKubeControllerManagerConfig KubeControllerManagerConfig = null,
    EksClusterKubernetesNetworkConfig KubernetesNetworkConfig = null,
    EksClusterKubeSchedulerConfig KubeSchedulerConfig = null,
    EksClusterLogging Logging = null,
    string Name = null,
    EksClusterOutpostConfig OutpostConfig = null,
    EksClusterRemoteNetworkConfig RemoteNetworkConfig = null,
    EksClusterRollbackConfig RollbackConfig = null,
    EksClusterStorageConfig StorageConfig = null,
    IResolvable|EksClusterTags[] Tags = null,
    EksClusterUpgradePolicy UpgradePolicy = null,
    string Version = null,
    EksClusterZonalShiftConfig ZonalShiftConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.resourcesVpcConfig">ResourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | An object representing the VPC configuration to use for an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | An object representing the Access Config to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons">BootstrapSelfManagedAddons</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to false to avoid creating the default networking add-ons when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig">ControlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | Configuration for provisioned control plane scaling. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to true to enable deletion protection for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Force cluster version update. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeApiServerConfig">KubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | The configuration for the Kubernetes API server on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig">KubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | The configuration for the Kubernetes controller manager on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | The Kubernetes network configuration for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeSchedulerConfig">KubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | The configuration for the Kubernetes scheduler on an Amazon EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.name">Name</a></code> | <code>string</code> | The unique name to give to your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.outpostConfig">OutpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | An object representing the Outpost configuration to use for AWS EKS outpost cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.remoteNetworkConfig">RemoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.rollbackConfig">RollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | The rollback configuration to use for the cluster version rollback. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | An object representing the Upgrade Policy to use for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.version">Version</a></code> | <code>string</code> | The desired Kubernetes version for your cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.zonalShiftConfig">ZonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | The current zonal shift configuration to use for the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourcesVpcConfig`<sup>Required</sup> <a name="ResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.resourcesVpcConfig"></a>

```csharp
public EksClusterResourcesVpcConfig ResourcesVpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

An object representing the VPC configuration to use for an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources_vpc_config EksCluster#resources_vpc_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.accessConfig"></a>

```csharp
public EksClusterAccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

An object representing the Access Config to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `BootstrapSelfManagedAddons`<sup>Optional</sup> <a name="BootstrapSelfManagedAddons" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons"></a>

```csharp
public bool|IResolvable BootstrapSelfManagedAddons { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to false to avoid creating the default networking add-ons when the cluster is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}

---

##### `ComputeConfig`<sup>Optional</sup> <a name="ComputeConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.computeConfig"></a>

```csharp
public EksClusterComputeConfig ComputeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `ControlPlaneScalingConfig`<sup>Optional</sup> <a name="ControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig"></a>

```csharp
public EksClusterControlPlaneScalingConfig ControlPlaneScalingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

Configuration for provisioned control plane scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_scaling_config EksCluster#control_plane_scaling_config}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to true to enable deletion protection for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.encryptionConfig"></a>

```csharp
public IResolvable|EksClusterEncryptionConfig[] EncryptionConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}.

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.force"></a>

```csharp
public bool|IResolvable Force { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Force cluster version update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#force EksCluster#force}

---

##### `KubeApiServerConfig`<sup>Optional</sup> <a name="KubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeApiServerConfig"></a>

```csharp
public EksClusterKubeApiServerConfig KubeApiServerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

The configuration for the Kubernetes API server on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_api_server_config EksCluster#kube_api_server_config}

---

##### `KubeControllerManagerConfig`<sup>Optional</sup> <a name="KubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig"></a>

```csharp
public EksClusterKubeControllerManagerConfig KubeControllerManagerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

The configuration for the Kubernetes controller manager on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_controller_manager_config EksCluster#kube_controller_manager_config}

---

##### `KubernetesNetworkConfig`<sup>Optional</sup> <a name="KubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig"></a>

```csharp
public EksClusterKubernetesNetworkConfig KubernetesNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

The Kubernetes network configuration for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `KubeSchedulerConfig`<sup>Optional</sup> <a name="KubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.kubeSchedulerConfig"></a>

```csharp
public EksClusterKubeSchedulerConfig KubeSchedulerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

The configuration for the Kubernetes scheduler on an Amazon EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_scheduler_config EksCluster#kube_scheduler_config}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.logging"></a>

```csharp
public EksClusterLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types.

By default, cluster control plane logs aren't exported to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#logging EksCluster#logging}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name to give to your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#name EksCluster#name}

---

##### `OutpostConfig`<sup>Optional</sup> <a name="OutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.outpostConfig"></a>

```csharp
public EksClusterOutpostConfig OutpostConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

An object representing the Outpost configuration to use for AWS EKS outpost cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `RemoteNetworkConfig`<sup>Optional</sup> <a name="RemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.remoteNetworkConfig"></a>

```csharp
public EksClusterRemoteNetworkConfig RemoteNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `RollbackConfig`<sup>Optional</sup> <a name="RollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.rollbackConfig"></a>

```csharp
public EksClusterRollbackConfig RollbackConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

The rollback configuration to use for the cluster version rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#rollback_config EksCluster#rollback_config}

---

##### `StorageConfig`<sup>Optional</sup> <a name="StorageConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.storageConfig"></a>

```csharp
public EksClusterStorageConfig StorageConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.tags"></a>

```csharp
public IResolvable|EksClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#tags EksCluster#tags}

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.upgradePolicy"></a>

```csharp
public EksClusterUpgradePolicy UpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

An object representing the Upgrade Policy to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The desired Kubernetes version for your cluster.

If you don't specify a value here, the latest version available in Amazon EKS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#version EksCluster#version}

---

##### `ZonalShiftConfig`<sup>Optional</sup> <a name="ZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterConfig.property.zonalShiftConfig"></a>

```csharp
public EksClusterZonalShiftConfig ZonalShiftConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

The current zonal shift configuration to use for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

### EksClusterControlPlaneScalingConfig <a name="EksClusterControlPlaneScalingConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterControlPlaneScalingConfig {
    string Tier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.property.tier">Tier</a></code> | <code>string</code> | The scaling tier for the provisioned control plane. |

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The scaling tier for the provisioned control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#tier EksCluster#tier}

---

### EksClusterEncryptionConfig <a name="EksClusterEncryptionConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterEncryptionConfig {
    EksClusterEncryptionConfigProvider Provider = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | The encryption provider for the cluster. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.resources">Resources</a></code> | <code>string[]</code> | Specifies the resources to be encrypted. The only supported value is "secrets". |

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.provider"></a>

```csharp
public EksClusterEncryptionConfigProvider Provider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

The encryption provider for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#provider EksCluster#provider}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Specifies the resources to be encrypted. The only supported value is "secrets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources EksCluster#resources}

---

### EksClusterEncryptionConfigProvider <a name="EksClusterEncryptionConfigProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterEncryptionConfigProvider {
    string KeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn">KeyArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) or alias of the KMS key. |

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) or alias of the KMS key.

The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}

---

### EksClusterKubeApiServerConfig <a name="EksClusterKubeApiServerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeApiServerConfig {
    string EventTtl = null,
    EksClusterKubeApiServerConfigServiceNodePortRange ServiceNodePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl">EventTtl</a></code> | <code>string</code> | The duration that Kubernetes events are retained (e.g., 30m, 1h). |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange">ServiceNodePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | The port range for Kubernetes NodePort services. |

---

##### `EventTtl`<sup>Optional</sup> <a name="EventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl"></a>

```csharp
public string EventTtl { get; set; }
```

- *Type:* string

The duration that Kubernetes events are retained (e.g., 30m, 1h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#event_ttl EksCluster#event_ttl}

---

##### `ServiceNodePortRange`<sup>Optional</sup> <a name="ServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange"></a>

```csharp
public EksClusterKubeApiServerConfigServiceNodePortRange ServiceNodePortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

The port range for Kubernetes NodePort services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#service_node_port_range EksCluster#service_node_port_range}

---

### EksClusterKubeApiServerConfigServiceNodePortRange <a name="EksClusterKubeApiServerConfigServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeApiServerConfigServiceNodePortRange {
    double MaxPort = null,
    double MinPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort">MaxPort</a></code> | <code>double</code> | The maximum port number in the range. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort">MinPort</a></code> | <code>double</code> | The minimum port number in the range. |

---

##### `MaxPort`<sup>Optional</sup> <a name="MaxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort"></a>

```csharp
public double MaxPort { get; set; }
```

- *Type:* double

The maximum port number in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#max_port EksCluster#max_port}

---

##### `MinPort`<sup>Optional</sup> <a name="MinPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort"></a>

```csharp
public double MinPort { get; set; }
```

- *Type:* double

The minimum port number in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#min_port EksCluster#min_port}

---

### EksClusterKubeControllerManagerConfig <a name="EksClusterKubeControllerManagerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeControllerManagerConfig {
    EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig HorizontalPodAutoscalerControllerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig">HorizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | The horizontal pod autoscaler controller configuration. |

---

##### `HorizontalPodAutoscalerControllerConfig`<sup>Optional</sup> <a name="HorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig"></a>

```csharp
public EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig HorizontalPodAutoscalerControllerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

The horizontal pod autoscaler controller configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_controller_config EksCluster#horizontal_pod_autoscaler_controller_config}

---

### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig {
    string HorizontalPodAutoscalerSyncPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod">HorizontalPodAutoscalerSyncPeriod</a></code> | <code>string</code> | The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m). |

---

##### `HorizontalPodAutoscalerSyncPeriod`<sup>Optional</sup> <a name="HorizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod"></a>

```csharp
public string HorizontalPodAutoscalerSyncPeriod { get; set; }
```

- *Type:* string

The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_sync_period EksCluster#horizontal_pod_autoscaler_sync_period}

---

### EksClusterKubernetesNetworkConfig <a name="EksClusterKubernetesNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubernetesNetworkConfig {
    EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancing = null,
    string IpFamily = null,
    string ServiceIpv4Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing">ElasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | Todo: add description. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily">IpFamily</a></code> | <code>string</code> | Ipv4 or Ipv6. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr">ServiceIpv4Cidr</a></code> | <code>string</code> | The CIDR block to assign Kubernetes service IP addresses from. |

---

##### `ElasticLoadBalancing`<sup>Optional</sup> <a name="ElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}

---

##### `IpFamily`<sup>Optional</sup> <a name="IpFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily"></a>

```csharp
public string IpFamily { get; set; }
```

- *Type:* string

Ipv4 or Ipv6.

You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}

---

##### `ServiceIpv4Cidr`<sup>Optional</sup> <a name="ServiceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

```csharp
public string ServiceIpv4Cidr { get; set; }
```

- *Type:* string

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#service_ipv_4_cidr EksCluster#service_ipv_4_cidr}

---

### EksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubernetesNetworkConfigElasticLoadBalancing {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Todo: add description. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

### EksClusterKubeSchedulerConfig <a name="EksClusterKubeSchedulerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfig {
    EksClusterKubeSchedulerConfigNodeResourcesFit NodeResourcesFit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit">NodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | The NodeResourcesFit plugin configuration for the Kubernetes scheduler. |

---

##### `NodeResourcesFit`<sup>Optional</sup> <a name="NodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit"></a>

```csharp
public EksClusterKubeSchedulerConfigNodeResourcesFit NodeResourcesFit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

The NodeResourcesFit plugin configuration for the Kubernetes scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_resources_fit EksCluster#node_resources_fit}

---

### EksClusterKubeSchedulerConfigNodeResourcesFit <a name="EksClusterKubeSchedulerConfigNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFit {
    EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy ScoringStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy">ScoringStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | The scoring strategy configuration for the NodeResourcesFit scheduler plugin. |

---

##### `ScoringStrategy`<sup>Optional</sup> <a name="ScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy"></a>

```csharp
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy ScoringStrategy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

The scoring strategy configuration for the NodeResourcesFit scheduler plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#scoring_strategy EksCluster#scoring_strategy}

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy {
    IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources[] Resources = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]</code> | The resource weights used for scoring nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type">Type</a></code> | <code>string</code> | The scoring strategy type (LeastAllocated or MostAllocated). |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resources"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]

The resource weights used for scoring nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources EksCluster#resources}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The scoring strategy type (LeastAllocated or MostAllocated).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#type EksCluster#type}

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources {
    string Name = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.name">Name</a></code> | <code>string</code> | The name of the resource (for example, cpu or memory). |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.weight">Weight</a></code> | <code>double</code> | The weight assigned to the resource for scoring. Must be between 1 and 100. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the resource (for example, cpu or memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#name EksCluster#name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight assigned to the resource for scoring. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#weight EksCluster#weight}

---

### EksClusterLogging <a name="EksClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLogging {
    EksClusterLoggingClusterLogging ClusterLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging.property.clusterLogging">ClusterLogging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | The cluster control plane logging configuration for your cluster. |

---

##### `ClusterLogging`<sup>Optional</sup> <a name="ClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLogging.property.clusterLogging"></a>

```csharp
public EksClusterLoggingClusterLogging ClusterLogging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

The cluster control plane logging configuration for your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cluster_logging EksCluster#cluster_logging}

---

### EksClusterLoggingClusterLogging <a name="EksClusterLoggingClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingClusterLogging {
    IResolvable|EksClusterLoggingClusterLoggingEnabledTypes[] EnabledTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.property.enabledTypes">EnabledTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]</code> | Enable control plane logs for your cluster, all log types will be disabled if the array is empty. |

---

##### `EnabledTypes`<sup>Optional</sup> <a name="EnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging.property.enabledTypes"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLoggingEnabledTypes[] EnabledTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]

Enable control plane logs for your cluster, all log types will be disabled if the array is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled_types EksCluster#enabled_types}

---

### EksClusterLoggingClusterLoggingEnabledTypes <a name="EksClusterLoggingClusterLoggingEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingClusterLoggingEnabledTypes {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.property.type">Type</a></code> | <code>string</code> | name of the log type. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#type EksCluster#type}

---

### EksClusterOutpostConfig <a name="EksClusterOutpostConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfig {
    string ControlPlaneInstanceType = null,
    EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacement = null,
    string EtcdInstanceType = null,
    EksClusterOutpostConfigEtcdPlacement EtcdPlacement = null,
    string[] OutpostArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType">ControlPlaneInstanceType</a></code> | <code>string</code> | The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement">ControlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType">EtcdInstanceType</a></code> | <code>string</code> | The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdPlacement">EtcdPlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.outpostArns">OutpostArns</a></code> | <code>string[]</code> | The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. |

---

##### `ControlPlaneInstanceType`<sup>Optional</sup> <a name="ControlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType"></a>

```csharp
public string ControlPlaneInstanceType { get; set; }
```

- *Type:* string

The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts.

This instance type applies to all control plane instances and cannot be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}

---

##### `ControlPlanePlacement`<sup>Optional</sup> <a name="ControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}

---

##### `EtcdInstanceType`<sup>Optional</sup> <a name="EtcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType"></a>

```csharp
public string EtcdInstanceType { get; set; }
```

- *Type:* string

The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts.

This instance type applies to all etcd instances and cannot be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#etcd_instance_type EksCluster#etcd_instance_type}

---

##### `EtcdPlacement`<sup>Optional</sup> <a name="EtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.etcdPlacement"></a>

```csharp
public EksClusterOutpostConfigEtcdPlacement EtcdPlacement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#etcd_placement EksCluster#etcd_placement}

---

##### `OutpostArns`<sup>Optional</sup> <a name="OutpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig.property.outpostArns"></a>

```csharp
public string[] OutpostArns { get; set; }
```

- *Type:* string[]

The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts.

Only a single Outpost ARN is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}

---

### EksClusterOutpostConfigControlPlanePlacement <a name="EksClusterOutpostConfigControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfigControlPlanePlacement {
    string GroupName = null,
    string SpreadLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName">GroupName</a></code> | <code>string</code> | The name of the placement group for the Kubernetes control plane instances. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel">SpreadLevel</a></code> | <code>string</code> | Optional parameter to specify the placement group spread level for control plane instances. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

The name of the placement group for the Kubernetes control plane instances.

This setting can't be changed after cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#group_name EksCluster#group_name}

---

##### `SpreadLevel`<sup>Optional</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel"></a>

```csharp
public string SpreadLevel { get; set; }
```

- *Type:* string

Optional parameter to specify the placement group spread level for control plane instances.

If not provided, EKS will deploy control plane instances without a placement group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}

---

### EksClusterOutpostConfigEtcdPlacement <a name="EksClusterOutpostConfigEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfigEtcdPlacement {
    string SpreadLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel">SpreadLevel</a></code> | <code>string</code> | Optional parameter to specify the placement group spread level for etcd instances. |

---

##### `SpreadLevel`<sup>Optional</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel"></a>

```csharp
public string SpreadLevel { get; set; }
```

- *Type:* string

Optional parameter to specify the placement group spread level for etcd instances.

If not provided, EKS will deploy etcd instances without a placement group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}

---

### EksClusterRemoteNetworkConfig <a name="EksClusterRemoteNetworkConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfig {
    IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks[] RemoteNodeNetworks = null,
    IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks[] RemotePodNetworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks">RemoteNodeNetworks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]</code> | Network configuration of nodes run on-premises with EKS Hybrid Nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks">RemotePodNetworks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]</code> | Network configuration of pods run on-premises with EKS Hybrid Nodes. |

---

##### `RemoteNodeNetworks`<sup>Optional</sup> <a name="RemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks[] RemoteNodeNetworks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]

Network configuration of nodes run on-premises with EKS Hybrid Nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}

---

##### `RemotePodNetworks`<sup>Optional</sup> <a name="RemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks[] RemotePodNetworks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]

Network configuration of pods run on-premises with EKS Hybrid Nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}

---

### EksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemoteNodeNetworks {
    string[] Cidrs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Specifies the list of remote node CIDRs. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Specifies the list of remote node CIDRs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}

---

### EksClusterRemoteNetworkConfigRemotePodNetworks <a name="EksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemotePodNetworks {
    string[] Cidrs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Specifies the list of remote pod CIDRs. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Specifies the list of remote pod CIDRs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}

---

### EksClusterResourcesVpcConfig <a name="EksClusterResourcesVpcConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterResourcesVpcConfig {
    string[] SubnetIds,
    string ControlPlaneEgressMode = null,
    bool|IResolvable EndpointPrivateAccess = null,
    bool|IResolvable EndpointPublicAccess = null,
    string[] PublicAccessCidrs = null,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Specify subnets for your Amazon EKS nodes. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.controlPlaneEgressMode">ControlPlaneEgressMode</a></code> | <code>string</code> | Specify the egress mode for the cluster control plane. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPrivateAccess">EndpointPrivateAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPublicAccess">EndpointPublicAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.publicAccessCidrs">PublicAccessCidrs</a></code> | <code>string[]</code> | The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Specify subnets for your Amazon EKS nodes.

Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}

---

##### `ControlPlaneEgressMode`<sup>Optional</sup> <a name="ControlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.controlPlaneEgressMode"></a>

```csharp
public string ControlPlaneEgressMode { get; set; }
```

- *Type:* string

Specify the egress mode for the cluster control plane.

If you set this to CUSTOMER_ROUTED, the control plane routes traffic through your VPC subnets instead of using AWS managed networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_egress_mode EksCluster#control_plane_egress_mode}

---

##### `EndpointPrivateAccess`<sup>Optional</sup> <a name="EndpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPrivateAccess"></a>

```csharp
public bool|IResolvable EndpointPrivateAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to true to enable private access for your cluster's Kubernetes API server endpoint.

If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}

---

##### `EndpointPublicAccess`<sup>Optional</sup> <a name="EndpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.endpointPublicAccess"></a>

```csharp
public bool|IResolvable EndpointPublicAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to false to disable public access to your cluster's Kubernetes API server endpoint.

If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}

---

##### `PublicAccessCidrs`<sup>Optional</sup> <a name="PublicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.publicAccessCidrs"></a>

```csharp
public string[] PublicAccessCidrs { get; set; }
```

- *Type:* string[]

The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint.

Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane.

If you don't specify a security group, the default security group for your VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}

---

### EksClusterRollbackConfig <a name="EksClusterRollbackConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRollbackConfig {
    double TimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours). |

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; set; }
```

- *Type:* double

The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#timeout_minutes EksCluster#timeout_minutes}

---

### EksClusterStorageConfig <a name="EksClusterStorageConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterStorageConfig {
    EksClusterStorageConfigBlockStorage BlockStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.property.blockStorage">BlockStorage</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | Todo: add description. |

---

##### `BlockStorage`<sup>Optional</sup> <a name="BlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig.property.blockStorage"></a>

```csharp
public EksClusterStorageConfigBlockStorage BlockStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}

---

### EksClusterStorageConfigBlockStorage <a name="EksClusterStorageConfigBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterStorageConfigBlockStorage {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Todo: add description. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Todo: add description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

### EksClusterTags <a name="EksClusterTags" id="@cdktn/provider-awscc.eksCluster.EksClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#key EksCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#value EksCluster#value}

---

### EksClusterUpgradePolicy <a name="EksClusterUpgradePolicy" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterUpgradePolicy {
    string SupportType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.property.supportType">SupportType</a></code> | <code>string</code> | Specify the support type for your cluster. |

---

##### `SupportType`<sup>Optional</sup> <a name="SupportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy.property.supportType"></a>

```csharp
public string SupportType { get; set; }
```

- *Type:* string

Specify the support type for your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#support_type EksCluster#support_type}

---

### EksClusterZonalShiftConfig <a name="EksClusterZonalShiftConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterZonalShiftConfig {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this value to true to enable zonal shift for the cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this value to true to enable zonal shift for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled EksCluster#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### EksClusterAccessConfigOutputReference <a name="EksClusterAccessConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions">ResetBootstrapClusterCreatorAdminPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetBootstrapClusterCreatorAdminPermissions` <a name="ResetBootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions"></a>

```csharp
private void ResetBootstrapClusterCreatorAdminPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput">BootstrapClusterCreatorAdminPermissionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">BootstrapClusterCreatorAdminPermissions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `BootstrapClusterCreatorAdminPermissionsInput`<sup>Optional</sup> <a name="BootstrapClusterCreatorAdminPermissionsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput"></a>

```csharp
public bool|IResolvable BootstrapClusterCreatorAdminPermissionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `BootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="BootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```csharp
public bool|IResolvable BootstrapClusterCreatorAdminPermissions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterAccessConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---


### EksClusterComputeConfigOutputReference <a name="EksClusterComputeConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterComputeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools">ResetNodePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn">ResetNodeRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetNodePools` <a name="ResetNodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools"></a>

```csharp
private void ResetNodePools()
```

##### `ResetNodeRoleArn` <a name="ResetNodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn"></a>

```csharp
private void ResetNodeRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput">NodePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput">NodeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools">NodePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn">NodeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NodePoolsInput`<sup>Optional</sup> <a name="NodePoolsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput"></a>

```csharp
public string[] NodePoolsInput { get; }
```

- *Type:* string[]

---

##### `NodeRoleArnInput`<sup>Optional</sup> <a name="NodeRoleArnInput" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput"></a>

```csharp
public string NodeRoleArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools"></a>

```csharp
public string[] NodePools { get; }
```

- *Type:* string[]

---

##### `NodeRoleArn`<sup>Required</sup> <a name="NodeRoleArn" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```csharp
public string NodeRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterComputeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---


### EksClusterControlPlaneScalingConfigOutputReference <a name="EksClusterControlPlaneScalingConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterControlPlaneScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTier` <a name="ResetTier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier"></a>

```csharp
private void ResetTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterControlPlaneScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---


### EksClusterEncryptionConfigList <a name="EksClusterEncryptionConfigList" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterEncryptionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get"></a>

```csharp
private EksClusterEncryptionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterEncryptionConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>[]

---


### EksClusterEncryptionConfigOutputReference <a name="EksClusterEncryptionConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider">PutProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvider` <a name="PutProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider"></a>

```csharp
private void PutProvider(EksClusterEncryptionConfigProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `ResetProvider` <a name="ResetProvider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetProvider"></a>

```csharp
private void ResetProvider()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput">ProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider"></a>

```csharp
public EksClusterEncryptionConfigProviderOutputReference Provider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput"></a>

```csharp
public IResolvable|EksClusterEncryptionConfigProvider ProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterEncryptionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---


### EksClusterEncryptionConfigProviderOutputReference <a name="EksClusterEncryptionConfigProviderOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterEncryptionConfigProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resetKeyArn">ResetKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resetKeyArn"></a>

```csharp
private void ResetKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterEncryptionConfigProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


### EksClusterKubeApiServerConfigOutputReference <a name="EksClusterKubeApiServerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeApiServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange">PutServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl">ResetEventTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange">ResetServiceNodePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceNodePortRange` <a name="PutServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange"></a>

```csharp
private void PutServiceNodePortRange(EksClusterKubeApiServerConfigServiceNodePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `ResetEventTtl` <a name="ResetEventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl"></a>

```csharp
private void ResetEventTtl()
```

##### `ResetServiceNodePortRange` <a name="ResetServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange"></a>

```csharp
private void ResetServiceNodePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange">ServiceNodePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput">EventTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput">ServiceNodePortRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl">EventTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNodePortRange`<sup>Required</sup> <a name="ServiceNodePortRange" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange"></a>

```csharp
public EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference ServiceNodePortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a>

---

##### `EventTtlInput`<sup>Optional</sup> <a name="EventTtlInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput"></a>

```csharp
public string EventTtlInput { get; }
```

- *Type:* string

---

##### `ServiceNodePortRangeInput`<sup>Optional</sup> <a name="ServiceNodePortRangeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput"></a>

```csharp
public IResolvable|EksClusterKubeApiServerConfigServiceNodePortRange ServiceNodePortRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `EventTtl`<sup>Required</sup> <a name="EventTtl" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl"></a>

```csharp
public string EventTtl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeApiServerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---


### EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference <a name="EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort">ResetMaxPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort">ResetMinPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxPort` <a name="ResetMaxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort"></a>

```csharp
private void ResetMaxPort()
```

##### `ResetMinPort` <a name="ResetMinPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort"></a>

```csharp
private void ResetMinPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput">MaxPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput">MinPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort">MaxPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort">MinPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxPortInput`<sup>Optional</sup> <a name="MaxPortInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput"></a>

```csharp
public double MaxPortInput { get; }
```

- *Type:* double

---

##### `MinPortInput`<sup>Optional</sup> <a name="MinPortInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput"></a>

```csharp
public double MinPortInput { get; }
```

- *Type:* double

---

##### `MaxPort`<sup>Required</sup> <a name="MaxPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort"></a>

```csharp
public double MaxPort { get; }
```

- *Type:* double

---

##### `MinPort`<sup>Required</sup> <a name="MinPort" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort"></a>

```csharp
public double MinPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeApiServerConfigServiceNodePortRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---


### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod">ResetHorizontalPodAutoscalerSyncPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHorizontalPodAutoscalerSyncPeriod` <a name="ResetHorizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod"></a>

```csharp
private void ResetHorizontalPodAutoscalerSyncPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput">HorizontalPodAutoscalerSyncPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod">HorizontalPodAutoscalerSyncPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HorizontalPodAutoscalerSyncPeriodInput`<sup>Optional</sup> <a name="HorizontalPodAutoscalerSyncPeriodInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput"></a>

```csharp
public string HorizontalPodAutoscalerSyncPeriodInput { get; }
```

- *Type:* string

---

##### `HorizontalPodAutoscalerSyncPeriod`<sup>Required</sup> <a name="HorizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod"></a>

```csharp
public string HorizontalPodAutoscalerSyncPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---


### EksClusterKubeControllerManagerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeControllerManagerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig">PutHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig">ResetHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHorizontalPodAutoscalerControllerConfig` <a name="PutHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig"></a>

```csharp
private void PutHorizontalPodAutoscalerControllerConfig(EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `ResetHorizontalPodAutoscalerControllerConfig` <a name="ResetHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig"></a>

```csharp
private void ResetHorizontalPodAutoscalerControllerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig">HorizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput">HorizontalPodAutoscalerControllerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HorizontalPodAutoscalerControllerConfig`<sup>Required</sup> <a name="HorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig"></a>

```csharp
public EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference HorizontalPodAutoscalerControllerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a>

---

##### `HorizontalPodAutoscalerControllerConfigInput`<sup>Optional</sup> <a name="HorizontalPodAutoscalerControllerConfigInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput"></a>

```csharp
public IResolvable|EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig HorizontalPodAutoscalerControllerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeControllerManagerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---


### EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubernetesNetworkConfigElasticLoadBalancing InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### EksClusterKubernetesNetworkConfigOutputReference <a name="EksClusterKubernetesNetworkConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubernetesNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing">PutElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing">ResetElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily">ResetIpFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr">ResetServiceIpv4Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElasticLoadBalancing` <a name="PutElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing"></a>

```csharp
private void PutElasticLoadBalancing(EksClusterKubernetesNetworkConfigElasticLoadBalancing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `ResetElasticLoadBalancing` <a name="ResetElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing"></a>

```csharp
private void ResetElasticLoadBalancing()
```

##### `ResetIpFamily` <a name="ResetIpFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily"></a>

```csharp
private void ResetIpFamily()
```

##### `ResetServiceIpv4Cidr` <a name="ResetServiceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr"></a>

```csharp
private void ResetServiceIpv4Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">ElasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">ServiceIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput">ElasticLoadBalancingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput">IpFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput">ServiceIpv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">IpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">ServiceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancing`<sup>Required</sup> <a name="ElasticLoadBalancing" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference ElasticLoadBalancing { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `ServiceIpv6Cidr`<sup>Required</sup> <a name="ServiceIpv6Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```csharp
public string ServiceIpv6Cidr { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancingInput`<sup>Optional</sup> <a name="ElasticLoadBalancingInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput"></a>

```csharp
public IResolvable|EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `IpFamilyInput`<sup>Optional</sup> <a name="IpFamilyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput"></a>

```csharp
public string IpFamilyInput { get; }
```

- *Type:* string

---

##### `ServiceIpv4CidrInput`<sup>Optional</sup> <a name="ServiceIpv4CidrInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput"></a>

```csharp
public string ServiceIpv4CidrInput { get; }
```

- *Type:* string

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```csharp
public string IpFamily { get; }
```

- *Type:* string

---

##### `ServiceIpv4Cidr`<sup>Required</sup> <a name="ServiceIpv4Cidr" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```csharp
public string ServiceIpv4Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubernetesNetworkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy">PutScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy">ResetScoringStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScoringStrategy` <a name="PutScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy"></a>

```csharp
private void PutScoringStrategy(EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `ResetScoringStrategy` <a name="ResetScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy"></a>

```csharp
private void ResetScoringStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy">ScoringStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput">ScoringStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScoringStrategy`<sup>Required</sup> <a name="ScoringStrategy" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy"></a>

```csharp
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference ScoringStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a>

---

##### `ScoringStrategyInput`<sup>Optional</sup> <a name="ScoringStrategyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy ScoringStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources"></a>

```csharp
private void PutResources(IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]

---

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resources"></a>

```csharp
public EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourcesInput"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get"></a>

```csharp
private EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>[]

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResources</a>

---


### EksClusterKubeSchedulerConfigOutputReference <a name="EksClusterKubeSchedulerConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterKubeSchedulerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit">PutNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit">ResetNodeResourcesFit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeResourcesFit` <a name="PutNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit"></a>

```csharp
private void PutNodeResourcesFit(EksClusterKubeSchedulerConfigNodeResourcesFit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `ResetNodeResourcesFit` <a name="ResetNodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit"></a>

```csharp
private void ResetNodeResourcesFit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit">NodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput">NodeResourcesFitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeResourcesFit`<sup>Required</sup> <a name="NodeResourcesFit" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit"></a>

```csharp
public EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference NodeResourcesFit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a>

---

##### `NodeResourcesFitInput`<sup>Optional</sup> <a name="NodeResourcesFitInput" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfigNodeResourcesFit NodeResourcesFitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterKubeSchedulerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---


### EksClusterLoggingClusterLoggingEnabledTypesList <a name="EksClusterLoggingClusterLoggingEnabledTypesList" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingClusterLoggingEnabledTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get"></a>

```csharp
private EksClusterLoggingClusterLoggingEnabledTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLoggingEnabledTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]

---


### EksClusterLoggingClusterLoggingEnabledTypesOutputReference <a name="EksClusterLoggingClusterLoggingEnabledTypesOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingClusterLoggingEnabledTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLoggingEnabledTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>

---


### EksClusterLoggingClusterLoggingOutputReference <a name="EksClusterLoggingClusterLoggingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingClusterLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes">PutEnabledTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resetEnabledTypes">ResetEnabledTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnabledTypes` <a name="PutEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes"></a>

```csharp
private void PutEnabledTypes(IResolvable|EksClusterLoggingClusterLoggingEnabledTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.putEnabledTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]

---

##### `ResetEnabledTypes` <a name="ResetEnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.resetEnabledTypes"></a>

```csharp
private void ResetEnabledTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypes">EnabledTypes</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList">EksClusterLoggingClusterLoggingEnabledTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypesInput">EnabledTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledTypes`<sup>Required</sup> <a name="EnabledTypes" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypes"></a>

```csharp
public EksClusterLoggingClusterLoggingEnabledTypesList EnabledTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypesList">EksClusterLoggingClusterLoggingEnabledTypesList</a>

---

##### `EnabledTypesInput`<sup>Optional</sup> <a name="EnabledTypesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.enabledTypesInput"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLoggingEnabledTypes[] EnabledTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingEnabledTypes">EksClusterLoggingClusterLoggingEnabledTypes</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---


### EksClusterLoggingOutputReference <a name="EksClusterLoggingOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging">PutClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resetClusterLogging">ResetClusterLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterLogging` <a name="PutClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging"></a>

```csharp
private void PutClusterLogging(EksClusterLoggingClusterLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.putClusterLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---

##### `ResetClusterLogging` <a name="ResetClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.resetClusterLogging"></a>

```csharp
private void ResetClusterLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLogging">ClusterLogging</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference">EksClusterLoggingClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLoggingInput">ClusterLoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterLogging`<sup>Required</sup> <a name="ClusterLogging" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLogging"></a>

```csharp
public EksClusterLoggingClusterLoggingOutputReference ClusterLogging { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLoggingOutputReference">EksClusterLoggingClusterLoggingOutputReference</a>

---

##### `ClusterLoggingInput`<sup>Optional</sup> <a name="ClusterLoggingInput" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.clusterLoggingInput"></a>

```csharp
public IResolvable|EksClusterLoggingClusterLogging ClusterLoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLoggingClusterLogging">EksClusterLoggingClusterLogging</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterLogging">EksClusterLogging</a>

---


### EksClusterOutpostConfigControlPlanePlacementOutputReference <a name="EksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfigControlPlanePlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel">ResetSpreadLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetSpreadLevel` <a name="ResetSpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel"></a>

```csharp
private void ResetSpreadLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput">SpreadLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel">SpreadLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `SpreadLevelInput`<sup>Optional</sup> <a name="SpreadLevelInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput"></a>

```csharp
public string SpreadLevelInput { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `SpreadLevel`<sup>Required</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel"></a>

```csharp
public string SpreadLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterOutpostConfigControlPlanePlacement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---


### EksClusterOutpostConfigEtcdPlacementOutputReference <a name="EksClusterOutpostConfigEtcdPlacementOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfigEtcdPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel">ResetSpreadLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpreadLevel` <a name="ResetSpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel"></a>

```csharp
private void ResetSpreadLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput">SpreadLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel">SpreadLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpreadLevelInput`<sup>Optional</sup> <a name="SpreadLevelInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput"></a>

```csharp
public string SpreadLevelInput { get; }
```

- *Type:* string

---

##### `SpreadLevel`<sup>Required</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel"></a>

```csharp
public string SpreadLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterOutpostConfigEtcdPlacement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---


### EksClusterOutpostConfigOutputReference <a name="EksClusterOutpostConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterOutpostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement">PutControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement">PutEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlaneInstanceType">ResetControlPlaneInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement">ResetControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType">ResetEtcdInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement">ResetEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetOutpostArns">ResetOutpostArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlanePlacement` <a name="PutControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement"></a>

```csharp
private void PutControlPlanePlacement(EksClusterOutpostConfigControlPlanePlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `PutEtcdPlacement` <a name="PutEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement"></a>

```csharp
private void PutEtcdPlacement(EksClusterOutpostConfigEtcdPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `ResetControlPlaneInstanceType` <a name="ResetControlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlaneInstanceType"></a>

```csharp
private void ResetControlPlaneInstanceType()
```

##### `ResetControlPlanePlacement` <a name="ResetControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement"></a>

```csharp
private void ResetControlPlanePlacement()
```

##### `ResetEtcdInstanceType` <a name="ResetEtcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType"></a>

```csharp
private void ResetEtcdInstanceType()
```

##### `ResetEtcdPlacement` <a name="ResetEtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement"></a>

```csharp
private void ResetEtcdPlacement()
```

##### `ResetOutpostArns` <a name="ResetOutpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.resetOutpostArns"></a>

```csharp
private void ResetOutpostArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement">ControlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement">EtcdPlacement</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput">ControlPlaneInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput">ControlPlanePlacementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput">EtcdInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput">EtcdPlacementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput">OutpostArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">ControlPlaneInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType">EtcdInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns">OutpostArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlanePlacement`<sup>Required</sup> <a name="ControlPlanePlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacementOutputReference ControlPlanePlacement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `EtcdPlacement`<sup>Required</sup> <a name="EtcdPlacement" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement"></a>

```csharp
public EksClusterOutpostConfigEtcdPlacementOutputReference EtcdPlacement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a>

---

##### `ControlPlaneInstanceTypeInput`<sup>Optional</sup> <a name="ControlPlaneInstanceTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput"></a>

```csharp
public string ControlPlaneInstanceTypeInput { get; }
```

- *Type:* string

---

##### `ControlPlanePlacementInput`<sup>Optional</sup> <a name="ControlPlanePlacementInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput"></a>

```csharp
public IResolvable|EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `EtcdInstanceTypeInput`<sup>Optional</sup> <a name="EtcdInstanceTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput"></a>

```csharp
public string EtcdInstanceTypeInput { get; }
```

- *Type:* string

---

##### `EtcdPlacementInput`<sup>Optional</sup> <a name="EtcdPlacementInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput"></a>

```csharp
public IResolvable|EksClusterOutpostConfigEtcdPlacement EtcdPlacementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `OutpostArnsInput`<sup>Optional</sup> <a name="OutpostArnsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput"></a>

```csharp
public string[] OutpostArnsInput { get; }
```

- *Type:* string[]

---

##### `ControlPlaneInstanceType`<sup>Required</sup> <a name="ControlPlaneInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```csharp
public string ControlPlaneInstanceType { get; }
```

- *Type:* string

---

##### `EtcdInstanceType`<sup>Required</sup> <a name="EtcdInstanceType" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType"></a>

```csharp
public string EtcdInstanceType { get; }
```

- *Type:* string

---

##### `OutpostArns`<sup>Required</sup> <a name="OutpostArns" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```csharp
public string[] OutpostArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterOutpostConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---


### EksClusterRemoteNetworkConfigOutputReference <a name="EksClusterRemoteNetworkConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks">PutRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks">PutRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks">ResetRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks">ResetRemotePodNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRemoteNodeNetworks` <a name="PutRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks"></a>

```csharp
private void PutRemoteNodeNetworks(IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]

---

##### `PutRemotePodNetworks` <a name="PutRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks"></a>

```csharp
private void PutRemotePodNetworks(IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]

---

##### `ResetRemoteNodeNetworks` <a name="ResetRemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks"></a>

```csharp
private void ResetRemoteNodeNetworks()
```

##### `ResetRemotePodNetworks` <a name="ResetRemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks"></a>

```csharp
private void ResetRemotePodNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">RemoteNodeNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList">EksClusterRemoteNetworkConfigRemoteNodeNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">RemotePodNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList">EksClusterRemoteNetworkConfigRemotePodNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput">RemoteNodeNetworksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput">RemotePodNetworksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RemoteNodeNetworks`<sup>Required</sup> <a name="RemoteNodeNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemoteNodeNetworksList RemoteNodeNetworks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList">EksClusterRemoteNetworkConfigRemoteNodeNetworksList</a>

---

##### `RemotePodNetworks`<sup>Required</sup> <a name="RemotePodNetworks" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemotePodNetworksList RemotePodNetworks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList">EksClusterRemoteNetworkConfigRemotePodNetworksList</a>

---

##### `RemoteNodeNetworksInput`<sup>Optional</sup> <a name="RemoteNodeNetworksInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks[] RemoteNodeNetworksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]

---

##### `RemotePodNetworksInput`<sup>Optional</sup> <a name="RemotePodNetworksInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks[] RemotePodNetworksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksList <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksList" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemoteNodeNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get"></a>

```csharp
private EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>[]

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemoteNodeNetworks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksList <a name="EksClusterRemoteNetworkConfigRemotePodNetworksList" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemotePodNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get"></a>

```csharp
private EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>[]

---


### EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRemoteNetworkConfigRemotePodNetworks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### EksClusterResourcesVpcConfigOutputReference <a name="EksClusterResourcesVpcConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterResourcesVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetControlPlaneEgressMode">ResetControlPlaneEgressMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPrivateAccess">ResetEndpointPrivateAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPublicAccess">ResetEndpointPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetPublicAccessCidrs">ResetPublicAccessCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneEgressMode` <a name="ResetControlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetControlPlaneEgressMode"></a>

```csharp
private void ResetControlPlaneEgressMode()
```

##### `ResetEndpointPrivateAccess` <a name="ResetEndpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPrivateAccess"></a>

```csharp
private void ResetEndpointPrivateAccess()
```

##### `ResetEndpointPublicAccess` <a name="ResetEndpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetEndpointPublicAccess"></a>

```csharp
private void ResetEndpointPublicAccess()
```

##### `ResetPublicAccessCidrs` <a name="ResetPublicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetPublicAccessCidrs"></a>

```csharp
private void ResetPublicAccessCidrs()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressModeInput">ControlPlaneEgressModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccessInput">EndpointPrivateAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccessInput">EndpointPublicAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrsInput">PublicAccessCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode">ControlPlaneEgressMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess">EndpointPrivateAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess">EndpointPublicAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs">PublicAccessCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneEgressModeInput`<sup>Optional</sup> <a name="ControlPlaneEgressModeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressModeInput"></a>

```csharp
public string ControlPlaneEgressModeInput { get; }
```

- *Type:* string

---

##### `EndpointPrivateAccessInput`<sup>Optional</sup> <a name="EndpointPrivateAccessInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccessInput"></a>

```csharp
public bool|IResolvable EndpointPrivateAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointPublicAccessInput`<sup>Optional</sup> <a name="EndpointPublicAccessInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccessInput"></a>

```csharp
public bool|IResolvable EndpointPublicAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublicAccessCidrsInput`<sup>Optional</sup> <a name="PublicAccessCidrsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrsInput"></a>

```csharp
public string[] PublicAccessCidrsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `ControlPlaneEgressMode`<sup>Required</sup> <a name="ControlPlaneEgressMode" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode"></a>

```csharp
public string ControlPlaneEgressMode { get; }
```

- *Type:* string

---

##### `EndpointPrivateAccess`<sup>Required</sup> <a name="EndpointPrivateAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```csharp
public bool|IResolvable EndpointPrivateAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointPublicAccess`<sup>Required</sup> <a name="EndpointPublicAccess" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess"></a>

```csharp
public bool|IResolvable EndpointPublicAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublicAccessCidrs`<sup>Required</sup> <a name="PublicAccessCidrs" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs"></a>

```csharp
public string[] PublicAccessCidrs { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterResourcesVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterResourcesVpcConfig">EksClusterResourcesVpcConfig</a>

---


### EksClusterRollbackConfigOutputReference <a name="EksClusterRollbackConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterRollbackConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.resetTimeoutMinutes"></a>

```csharp
private void ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutesInput"></a>

```csharp
public double TimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterRollbackConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterRollbackConfig">EksClusterRollbackConfig</a>

---


### EksClusterStorageConfigBlockStorageOutputReference <a name="EksClusterStorageConfigBlockStorageOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterStorageConfigBlockStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterStorageConfigBlockStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---


### EksClusterStorageConfigOutputReference <a name="EksClusterStorageConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage">PutBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage">ResetBlockStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockStorage` <a name="PutBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage"></a>

```csharp
private void PutBlockStorage(EksClusterStorageConfigBlockStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `ResetBlockStorage` <a name="ResetBlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage"></a>

```csharp
private void ResetBlockStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage">BlockStorage</a></code> | <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput">BlockStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockStorage`<sup>Required</sup> <a name="BlockStorage" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage"></a>

```csharp
public EksClusterStorageConfigBlockStorageOutputReference BlockStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `BlockStorageInput`<sup>Optional</sup> <a name="BlockStorageInput" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput"></a>

```csharp
public IResolvable|EksClusterStorageConfigBlockStorage BlockStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterStorageConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---


### EksClusterTagsList <a name="EksClusterTagsList" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get"></a>

```csharp
private EksClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|EksClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>[]

---


### EksClusterTagsOutputReference <a name="EksClusterTagsOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterTags">EksClusterTags</a>

---


### EksClusterUpgradePolicyOutputReference <a name="EksClusterUpgradePolicyOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType">ResetSupportType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportType` <a name="ResetSupportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType"></a>

```csharp
private void ResetSupportType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput">SupportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType">SupportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SupportTypeInput`<sup>Optional</sup> <a name="SupportTypeInput" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput"></a>

```csharp
public string SupportTypeInput { get; }
```

- *Type:* string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType"></a>

```csharp
public string SupportType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterUpgradePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---


### EksClusterZonalShiftConfigOutputReference <a name="EksClusterZonalShiftConfigOutputReference" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EksClusterZonalShiftConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksClusterZonalShiftConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---



