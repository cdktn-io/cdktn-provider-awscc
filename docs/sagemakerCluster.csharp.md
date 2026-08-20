# `sagemakerCluster` Submodule <a name="`sagemakerCluster` Submodule" id="@cdktn/provider-awscc.sagemakerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCluster <a name="SagemakerCluster" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerCluster(Construct Scope, string Id, SagemakerClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig">SagemakerClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig">SagemakerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling">PutAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups">PutInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator">PutOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups">PutRestrictedInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig">PutTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling">ResetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole">ResetClusterRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups">ResetInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode">ResetNodeProvisioningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery">ResetNodeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator">ResetOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups">ResetRestrictedInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig">ResetTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling"></a>

```csharp
private void PutAutoScaling(SagemakerClusterAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---

##### `PutInstanceGroups` <a name="PutInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups"></a>

```csharp
private void PutInstanceGroups(IResolvable|SagemakerClusterInstanceGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putInstanceGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]

---

##### `PutOrchestrator` <a name="PutOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator"></a>

```csharp
private void PutOrchestrator(SagemakerClusterOrchestrator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putOrchestrator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---

##### `PutRestrictedInstanceGroups` <a name="PutRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups"></a>

```csharp
private void PutRestrictedInstanceGroups(IResolvable|SagemakerClusterRestrictedInstanceGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putRestrictedInstanceGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]

---

##### `PutTieredStorageConfig` <a name="PutTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig"></a>

```csharp
private void PutTieredStorageConfig(SagemakerClusterTieredStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putTieredStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig"></a>

```csharp
private void PutVpcConfig(SagemakerClusterVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---

##### `ResetAutoScaling` <a name="ResetAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetAutoScaling"></a>

```csharp
private void ResetAutoScaling()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetClusterRole` <a name="ResetClusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetClusterRole"></a>

```csharp
private void ResetClusterRole()
```

##### `ResetInstanceGroups` <a name="ResetInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetInstanceGroups"></a>

```csharp
private void ResetInstanceGroups()
```

##### `ResetNodeProvisioningMode` <a name="ResetNodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeProvisioningMode"></a>

```csharp
private void ResetNodeProvisioningMode()
```

##### `ResetNodeRecovery` <a name="ResetNodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetNodeRecovery"></a>

```csharp
private void ResetNodeRecovery()
```

##### `ResetOrchestrator` <a name="ResetOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetOrchestrator"></a>

```csharp
private void ResetOrchestrator()
```

##### `ResetRestrictedInstanceGroups` <a name="ResetRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetRestrictedInstanceGroups"></a>

```csharp
private void ResetRestrictedInstanceGroups()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTieredStorageConfig` <a name="ResetTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetTieredStorageConfig"></a>

```csharp
private void ResetTieredStorageConfig()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus">ClusterStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups">InstanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator">Orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups">RestrictedInstanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig">TieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput">AutoScalingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput">ClusterRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput">InstanceGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput">NodeProvisioningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput">NodeRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput">OrchestratorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput">RestrictedInstanceGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput">TieredStorageConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole">ClusterRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode">NodeProvisioningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery">NodeRecovery</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScaling"></a>

```csharp
public SagemakerClusterAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference">SagemakerClusterAutoScalingOutputReference</a>

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `ClusterStatus`<sup>Required</sup> <a name="ClusterStatus" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterStatus"></a>

```csharp
public string ClusterStatus { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceGroups`<sup>Required</sup> <a name="InstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroups"></a>

```csharp
public SagemakerClusterInstanceGroupsList InstanceGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList">SagemakerClusterInstanceGroupsList</a>

---

##### `Orchestrator`<sup>Required</sup> <a name="Orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestrator"></a>

```csharp
public SagemakerClusterOrchestratorOutputReference Orchestrator { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference">SagemakerClusterOrchestratorOutputReference</a>

---

##### `RestrictedInstanceGroups`<sup>Required</sup> <a name="RestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroups"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsList RestrictedInstanceGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList">SagemakerClusterRestrictedInstanceGroupsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tags"></a>

```csharp
public SagemakerClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList">SagemakerClusterTagsList</a>

---

##### `TieredStorageConfig`<sup>Required</sup> <a name="TieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfig"></a>

```csharp
public SagemakerClusterTieredStorageConfigOutputReference TieredStorageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference">SagemakerClusterTieredStorageConfigOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfig"></a>

```csharp
public SagemakerClusterVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference">SagemakerClusterVpcConfigOutputReference</a>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.autoScalingInput"></a>

```csharp
public IResolvable|SagemakerClusterAutoScaling AutoScalingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterRoleInput`<sup>Optional</sup> <a name="ClusterRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRoleInput"></a>

```csharp
public string ClusterRoleInput { get; }
```

- *Type:* string

---

##### `InstanceGroupsInput`<sup>Optional</sup> <a name="InstanceGroupsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.instanceGroupsInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroups[] InstanceGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]

---

##### `NodeProvisioningModeInput`<sup>Optional</sup> <a name="NodeProvisioningModeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningModeInput"></a>

```csharp
public string NodeProvisioningModeInput { get; }
```

- *Type:* string

---

##### `NodeRecoveryInput`<sup>Optional</sup> <a name="NodeRecoveryInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecoveryInput"></a>

```csharp
public string NodeRecoveryInput { get; }
```

- *Type:* string

---

##### `OrchestratorInput`<sup>Optional</sup> <a name="OrchestratorInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.orchestratorInput"></a>

```csharp
public IResolvable|SagemakerClusterOrchestrator OrchestratorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---

##### `RestrictedInstanceGroupsInput`<sup>Optional</sup> <a name="RestrictedInstanceGroupsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.restrictedInstanceGroupsInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroups[] RestrictedInstanceGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]

---

##### `TieredStorageConfigInput`<sup>Optional</sup> <a name="TieredStorageConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tieredStorageConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterTieredStorageConfig TieredStorageConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.vpcConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ClusterRole`<sup>Required</sup> <a name="ClusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.clusterRole"></a>

```csharp
public string ClusterRole { get; }
```

- *Type:* string

---

##### `NodeProvisioningMode`<sup>Required</sup> <a name="NodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeProvisioningMode"></a>

```csharp
public string NodeProvisioningMode { get; }
```

- *Type:* string

---

##### `NodeRecovery`<sup>Required</sup> <a name="NodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.nodeRecovery"></a>

```csharp
public string NodeRecovery { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterAutoScaling <a name="SagemakerClusterAutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterAutoScaling {
    string AutoScalerType = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType">AutoScalerType</a></code> | <code>string</code> | The type of auto-scaler to use. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode">Mode</a></code> | <code>string</code> | The auto-scaling mode for the cluster. |

---

##### `AutoScalerType`<sup>Optional</sup> <a name="AutoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.autoScalerType"></a>

```csharp
public string AutoScalerType { get; set; }
```

- *Type:* string

The type of auto-scaler to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_scaler_type SagemakerCluster#auto_scaler_type}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The auto-scaling mode for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterConfig <a name="SagemakerClusterConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SagemakerClusterAutoScaling AutoScaling = null,
    string ClusterName = null,
    string ClusterRole = null,
    IResolvable|SagemakerClusterInstanceGroups[] InstanceGroups = null,
    string NodeProvisioningMode = null,
    string NodeRecovery = null,
    SagemakerClusterOrchestrator Orchestrator = null,
    IResolvable|SagemakerClusterRestrictedInstanceGroups[] RestrictedInstanceGroups = null,
    IResolvable|SagemakerClusterTags[] Tags = null,
    SagemakerClusterTieredStorageConfig TieredStorageConfig = null,
    SagemakerClusterVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | Configuration for cluster auto-scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the HyperPod Cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole">ClusterRole</a></code> | <code>string</code> | The cluster role for the autoscaler to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups">InstanceGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]</code> | The instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode">NodeProvisioningMode</a></code> | <code>string</code> | Determines the scaling strategy for the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery">NodeRecovery</a></code> | <code>string</code> | If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator">Orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups">RestrictedInstanceGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]</code> | The restricted instance groups of the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]</code> | Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig">TieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | Configuration for tiered storage in the SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScaling`<sup>Optional</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.autoScaling"></a>

```csharp
public SagemakerClusterAutoScaling AutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

Configuration for cluster auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_scaling SagemakerCluster#auto_scaling}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the HyperPod Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_name SagemakerCluster#cluster_name}

---

##### `ClusterRole`<sup>Optional</sup> <a name="ClusterRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.clusterRole"></a>

```csharp
public string ClusterRole { get; set; }
```

- *Type:* string

The cluster role for the autoscaler to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_role SagemakerCluster#cluster_role}

---

##### `InstanceGroups`<sup>Optional</sup> <a name="InstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.instanceGroups"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroups[] InstanceGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]

The instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_groups SagemakerCluster#instance_groups}

---

##### `NodeProvisioningMode`<sup>Optional</sup> <a name="NodeProvisioningMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeProvisioningMode"></a>

```csharp
public string NodeProvisioningMode { get; set; }
```

- *Type:* string

Determines the scaling strategy for the SageMaker HyperPod cluster.

When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#node_provisioning_mode SagemakerCluster#node_provisioning_mode}

---

##### `NodeRecovery`<sup>Optional</sup> <a name="NodeRecovery" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.nodeRecovery"></a>

```csharp
public string NodeRecovery { get; set; }
```

- *Type:* string

If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected.

If set to false, nodes will be labelled when a fault is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#node_recovery SagemakerCluster#node_recovery}

---

##### `Orchestrator`<sup>Optional</sup> <a name="Orchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.orchestrator"></a>

```csharp
public SagemakerClusterOrchestrator Orchestrator { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#orchestrator SagemakerCluster#orchestrator}

---

##### `RestrictedInstanceGroups`<sup>Optional</sup> <a name="RestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.restrictedInstanceGroups"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroups[] RestrictedInstanceGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]

The restricted instance groups of the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#restricted_instance_groups SagemakerCluster#restricted_instance_groups}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]

Custom tags for managing the SageMaker HyperPod cluster as an AWS resource.

You can add tags to your cluster in the same way you add them in other AWS services that support tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#tags SagemakerCluster#tags}

---

##### `TieredStorageConfig`<sup>Optional</sup> <a name="TieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.tieredStorageConfig"></a>

```csharp
public SagemakerClusterTieredStorageConfig TieredStorageConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

Configuration for tiered storage in the SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#tiered_storage_config SagemakerCluster#tiered_storage_config}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterConfig.property.vpcConfig"></a>

```csharp
public SagemakerClusterVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#vpc_config SagemakerCluster#vpc_config}

---

### SagemakerClusterInstanceGroups <a name="SagemakerClusterInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroups {
    SagemakerClusterInstanceGroupsCapacityRequirements CapacityRequirements = null,
    double CurrentCount = null,
    string ExecutionRole = null,
    string ImageId = null,
    double InstanceCount = null,
    string InstanceGroupName = null,
    IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigs = null,
    string InstanceType = null,
    SagemakerClusterInstanceGroupsKubernetesConfig KubernetesConfig = null,
    SagemakerClusterInstanceGroupsLifeCycleConfig LifeCycleConfig = null,
    double MinInstanceCount = null,
    string[] OnStartDeepHealthChecks = null,
    SagemakerClusterInstanceGroupsOverrideVpcConfig OverrideVpcConfig = null,
    SagemakerClusterInstanceGroupsScheduledUpdateConfig ScheduledUpdateConfig = null,
    double ThreadsPerCore = null,
    string TrainingPlanArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements">CapacityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | Specifies the capacity requirements configuration for an instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount">CurrentCount</a></code> | <code>double</code> | The number of instances that are currently in the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole">ExecutionRole</a></code> | <code>string</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId">ImageId</a></code> | <code>string</code> | AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount">InstanceCount</a></code> | <code>double</code> | The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName">InstanceGroupName</a></code> | <code>string</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]</code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType">InstanceType</a></code> | <code>string</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig">KubernetesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | Kubernetes configuration for cluster nodes including labels and taints. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig">LifeCycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | The lifecycle configuration for a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | The minimum number of instances required for the instance group to be InService. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>string[]</code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig">ScheduledUpdateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | The configuration object of the schedule that SageMaker follows when updating the AMI. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. |

---

##### `CapacityRequirements`<sup>Optional</sup> <a name="CapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.capacityRequirements"></a>

```csharp
public SagemakerClusterInstanceGroupsCapacityRequirements CapacityRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

Specifies the capacity requirements configuration for an instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#capacity_requirements SagemakerCluster#capacity_requirements}

---

##### `CurrentCount`<sup>Optional</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.currentCount"></a>

```csharp
public double CurrentCount { get; set; }
```

- *Type:* double

The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#image_id SagemakerCluster#image_id}

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `InstanceGroupName`<sup>Optional</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceGroupName"></a>

```csharp
public string InstanceGroupName { get; set; }
```

- *Type:* string

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `InstanceStorageConfigs`<sup>Optional</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceStorageConfigs"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `KubernetesConfig`<sup>Optional</sup> <a name="KubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.kubernetesConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsKubernetesConfig KubernetesConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

Kubernetes configuration for cluster nodes including labels and taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#kubernetes_config SagemakerCluster#kubernetes_config}

---

##### `LifeCycleConfig`<sup>Optional</sup> <a name="LifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.lifeCycleConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsLifeCycleConfig LifeCycleConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

The lifecycle configuration for a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#life_cycle_config SagemakerCluster#life_cycle_config}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

The minimum number of instances required for the instance group to be InService.

MinInstanceCount must be less than or equal to InstanceCount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#min_instance_count SagemakerCluster#min_instance_count}

---

##### `OnStartDeepHealthChecks`<sup>Optional</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.onStartDeepHealthChecks"></a>

```csharp
public string[] OnStartDeepHealthChecks { get; set; }
```

- *Type:* string[]

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `OverrideVpcConfig`<sup>Optional</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.overrideVpcConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsOverrideVpcConfig OverrideVpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `ScheduledUpdateConfig`<sup>Optional</sup> <a name="ScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.scheduledUpdateConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfig ScheduledUpdateConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

The configuration object of the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#scheduled_update_config SagemakerCluster#scheduled_update_config}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups.property.trainingPlanArn"></a>

```csharp
public string TrainingPlanArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterInstanceGroupsCapacityRequirements <a name="SagemakerClusterInstanceGroupsCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsCapacityRequirements {
    string OnDemand = null,
    string Spot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand">OnDemand</a></code> | <code>string</code> | Options for OnDemand capacity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot">Spot</a></code> | <code>string</code> | Options for Spot capacity. |

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.onDemand"></a>

```csharp
public string OnDemand { get; set; }
```

- *Type:* string

Options for OnDemand capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_demand SagemakerCluster#on_demand}

---

##### `Spot`<sup>Optional</sup> <a name="Spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements.property.spot"></a>

```csharp
public string Spot { get; set; }
```

- *Type:* string

Options for Spot capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#spot SagemakerCluster#spot}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsInstanceStorageConfigs {
    SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `EbsVolumeConfig`<sup>Optional</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {
    bool|IResolvable RootVolume = null,
    string VolumeKmsKeyId = null,
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">RootVolume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```csharp
public bool|IResolvable RootVolume { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterInstanceGroupsKubernetesConfig <a name="SagemakerClusterInstanceGroupsKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsKubernetesConfig {
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints[] Taints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of Kubernetes labels to apply to cluster nodes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints">Taints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]</code> | A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of Kubernetes labels to apply to cluster nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#labels SagemakerCluster#labels}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig.property.taints"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints[] Taints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]

A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#taints SagemakerCluster#taints}

---

### SagemakerClusterInstanceGroupsKubernetesConfigTaints <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsKubernetesConfigTaints {
    string Effect = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect">Effect</a></code> | <code>string</code> | The effect of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key">Key</a></code> | <code>string</code> | The key of the taint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value">Value</a></code> | <code>string</code> | The value of the taint. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The effect of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#effect SagemakerCluster#effect}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsLifeCycleConfig <a name="SagemakerClusterInstanceGroupsLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsLifeCycleConfig {
    string OnCreate = null,
    string SourceS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate">OnCreate</a></code> | <code>string</code> | The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri">SourceS3Uri</a></code> | <code>string</code> | An Amazon S3 bucket path where your lifecycle scripts are stored. |

---

##### `OnCreate`<sup>Optional</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.onCreate"></a>

```csharp
public string OnCreate { get; set; }
```

- *Type:* string

The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_create SagemakerCluster#on_create}

---

##### `SourceS3Uri`<sup>Optional</sup> <a name="SourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig.property.sourceS3Uri"></a>

```csharp
public string SourceS3Uri { get; set; }
```

- *Type:* string

An Amazon S3 bucket path where your lifecycle scripts are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#source_s3_uri SagemakerCluster#source_s3_uri}

---

### SagemakerClusterInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsOverrideVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfig {
    SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig DeploymentConfig = null,
    string ScheduleExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | The configuration to use when updating the AMI versions. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | A cron expression that specifies the schedule that SageMaker follows when updating the AMI. |

---

##### `DeploymentConfig`<sup>Optional</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.deploymentConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig DeploymentConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

The configuration to use when updating the AMI versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#deployment_config SagemakerCluster#deployment_config}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

A cron expression that specifies the schedule that SageMaker follows when updating the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#schedule_expression SagemakerCluster#schedule_expression}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig {
    IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfiguration = null,
    SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy RollingUpdatePolicy = null,
    double WaitIntervalInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]</code> | An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | The policy that SageMaker uses when updating the AMI versions of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | The duration in seconds that SageMaker waits before updating more instances in the cluster. |

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.autoRollbackConfiguration"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]

An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_rollback_configuration SagemakerCluster#auto_rollback_configuration}

---

##### `RollingUpdatePolicy`<sup>Optional</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.rollingUpdatePolicy"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy RollingUpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

The policy that SageMaker uses when updating the AMI versions of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#rolling_update_policy SagemakerCluster#rolling_update_policy}

---

##### `WaitIntervalInSeconds`<sup>Optional</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; set; }
```

- *Type:* double

The duration in seconds that SageMaker waits before updating more instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds SagemakerCluster#wait_interval_in_seconds}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration {
    string AlarmName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName">AlarmName</a></code> | <code>string</code> | The name of the alarm. |

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

The name of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#alarm_name SagemakerCluster#alarm_name}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy {
    SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize MaximumBatchSize = null,
    SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize RollbackMaximumBatchSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | The configuration of the size measurements of the AMI update. |

---

##### `MaximumBatchSize`<sup>Optional</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize MaximumBatchSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#maximum_batch_size SagemakerCluster#maximum_batch_size}

---

##### `RollbackMaximumBatchSize`<sup>Optional</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize RollbackMaximumBatchSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

The configuration of the size measurements of the AMI update.

Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size SagemakerCluster#rollback_maximum_batch_size}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">Type</a></code> | <code>string</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">Value</a></code> | <code>double</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">Type</a></code> | <code>string</code> | Specifies whether SageMaker should process the update by amount or percentage of instances. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">Value</a></code> | <code>double</code> | Specifies the amount or percentage of instances SageMaker updates at a time. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies whether SageMaker should process the update by amount or percentage of instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#type SagemakerCluster#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Specifies the amount or percentage of instances SageMaker updates at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterOrchestrator <a name="SagemakerClusterOrchestrator" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterOrchestrator {
    SagemakerClusterOrchestratorEks Eks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,. |

---

##### `Eks`<sup>Optional</sup> <a name="Eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator.property.eks"></a>

```csharp
public SagemakerClusterOrchestratorEks Eks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#eks SagemakerCluster#eks}

---

### SagemakerClusterOrchestratorEks <a name="SagemakerClusterOrchestratorEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterOrchestratorEks {
    string ClusterArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn">ClusterArn</a></code> | <code>string</code> | The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster. |

---

##### `ClusterArn`<sup>Optional</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_arn SagemakerCluster#cluster_arn}

---

### SagemakerClusterRestrictedInstanceGroups <a name="SagemakerClusterRestrictedInstanceGroups" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroups {
    double CurrentCount = null,
    SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig EnvironmentConfig = null,
    string ExecutionRole = null,
    double InstanceCount = null,
    string InstanceGroupName = null,
    IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigs = null,
    string InstanceType = null,
    string[] OnStartDeepHealthChecks = null,
    SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig OverrideVpcConfig = null,
    double ThreadsPerCore = null,
    string TrainingPlanArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount">CurrentCount</a></code> | <code>double</code> | The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | The configuration for the restricted instance groups (RIG) environment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole">ExecutionRole</a></code> | <code>string</code> | The execution role for the instance group to assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount">InstanceCount</a></code> | <code>double</code> | The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName">InstanceGroupName</a></code> | <code>string</code> | The name of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]</code> | The instance storage configuration for the instance group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType">InstanceType</a></code> | <code>string</code> | The instance type of the instance group of a SageMaker HyperPod cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>string[]</code> | Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. |

---

##### `CurrentCount`<sup>Optional</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.currentCount"></a>

```csharp
public double CurrentCount { get; set; }
```

- *Type:* double

The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#current_count SagemakerCluster#current_count}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.environmentConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig EnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

The configuration for the restricted instance groups (RIG) environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#environment_config SagemakerCluster#environment_config}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

The execution role for the instance group to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#execution_role SagemakerCluster#execution_role}

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_count SagemakerCluster#instance_count}

---

##### `InstanceGroupName`<sup>Optional</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceGroupName"></a>

```csharp
public string InstanceGroupName { get; set; }
```

- *Type:* string

The name of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_group_name SagemakerCluster#instance_group_name}

---

##### `InstanceStorageConfigs`<sup>Optional</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceStorageConfigs"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]

The instance storage configuration for the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_storage_configs SagemakerCluster#instance_storage_configs}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The instance type of the instance group of a SageMaker HyperPod cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_type SagemakerCluster#instance_type}

---

##### `OnStartDeepHealthChecks`<sup>Optional</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.onStartDeepHealthChecks"></a>

```csharp
public string[] OnStartDeepHealthChecks { get; set; }
```

- *Type:* string[]

Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks SagemakerCluster#on_start_deep_health_checks}

---

##### `OverrideVpcConfig`<sup>Optional</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.overrideVpcConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig OverrideVpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#override_vpc_config SagemakerCluster#override_vpc_config}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading.

For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#threads_per_core SagemakerCluster#threads_per_core}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups.property.trainingPlanArn"></a>

```csharp
public string TrainingPlanArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group.

For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#training_plan_arn SagemakerCluster#training_plan_arn}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig {
    SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig FsxLustreConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig">FsxLustreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster. |

---

##### `FsxLustreConfig`<sup>Optional</sup> <a name="FsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.property.fsxLustreConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig FsxLustreConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#fsx_lustre_config SagemakerCluster#fsx_lustre_config}

---

### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig {
    double PerUnitStorageThroughput = null,
    double SizeInGiB = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB">SizeInGiB</a></code> | <code>double</code> | The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB). |

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; set; }
```

- *Type:* double

The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput SagemakerCluster#per_unit_storage_throughput}

---

##### `SizeInGiB`<sup>Optional</sup> <a name="SizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.property.sizeInGiB"></a>

```csharp
public double SizeInGiB { get; set; }
```

- *Type:* double

The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#size_in_gi_b SagemakerCluster#size_in_gi_b}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs {
    SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `EbsVolumeConfig`<sup>Optional</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.property.ebsVolumeConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#ebs_volume_config SagemakerCluster#ebs_volume_config}

---

### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {
    bool|IResolvable RootVolume = null,
    string VolumeKmsKeyId = null,
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume">RootVolume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. |

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.rootVolume"></a>

```csharp
public bool|IResolvable RootVolume { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume SagemakerCluster#root_volume}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id SagemakerCluster#volume_kms_key_id}.

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.

The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_size_in_gb SagemakerCluster#volume_size_in_gb}

---

### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

### SagemakerClusterTags <a name="SagemakerClusterTags" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#key SagemakerCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value SagemakerCluster#value}

---

### SagemakerClusterTieredStorageConfig <a name="SagemakerClusterTieredStorageConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterTieredStorageConfig {
    double InstanceMemoryAllocationPercentage = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage">InstanceMemoryAllocationPercentage</a></code> | <code>double</code> | The percentage of instance memory to allocate for tiered storage. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode">Mode</a></code> | <code>string</code> | The mode of tiered storage. |

---

##### `InstanceMemoryAllocationPercentage`<sup>Optional</sup> <a name="InstanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.instanceMemoryAllocationPercentage"></a>

```csharp
public double InstanceMemoryAllocationPercentage { get; set; }
```

- *Type:* double

The percentage of instance memory to allocate for tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage SagemakerCluster#instance_memory_allocation_percentage}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of tiered storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#mode SagemakerCluster#mode}

---

### SagemakerClusterVpcConfig <a name="SagemakerClusterVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids SagemakerCluster#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets SagemakerCluster#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterAutoScalingOutputReference <a name="SagemakerClusterAutoScalingOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType">ResetAutoScalerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoScalerType` <a name="ResetAutoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetAutoScalerType"></a>

```csharp
private void ResetAutoScalerType()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput">AutoScalerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType">AutoScalerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalerTypeInput`<sup>Optional</sup> <a name="AutoScalerTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerTypeInput"></a>

```csharp
public string AutoScalerTypeInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `AutoScalerType`<sup>Required</sup> <a name="AutoScalerType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.autoScalerType"></a>

```csharp
public string AutoScalerType { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScalingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterAutoScaling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterAutoScaling">SagemakerClusterAutoScaling</a>

---


### SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference <a name="SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot">ResetSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetOnDemand"></a>

```csharp
private void ResetOnDemand()
```

##### `ResetSpot` <a name="ResetSpot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resetSpot"></a>

```csharp
private void ResetSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput">SpotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand">OnDemand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot">Spot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemandInput"></a>

```csharp
public string OnDemandInput { get; }
```

- *Type:* string

---

##### `SpotInput`<sup>Optional</sup> <a name="SpotInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spotInput"></a>

```csharp
public string SpotInput { get; }
```

- *Type:* string

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand"></a>

```csharp
public string OnDemand { get; }
```

- *Type:* string

---

##### `Spot`<sup>Required</sup> <a name="Spot" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot"></a>

```csharp
public string Spot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsCapacityRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">RootVolume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```csharp
public bool|IResolvable RootVolumeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```csharp
public bool|IResolvable RootVolume { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get"></a>

```csharp
private SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]

---


### SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">PutEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">ResetEbsVolumeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumeConfig` <a name="PutEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```csharp
private void PutEbsVolumeConfig(SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `ResetEbsVolumeConfig` <a name="ResetEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```csharp
private void ResetEbsVolumeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">EbsVolumeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumeConfig`<sup>Required</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference EbsVolumeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `EbsVolumeConfigInput`<sup>Optional</sup> <a name="EbsVolumeConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsKubernetesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaints` <a name="PutTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints"></a>

```csharp
private void PutTaints(IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resetTaints"></a>

```csharp
private void ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput">TaintsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints"></a>

```csharp
public SagemakerClusterInstanceGroupsKubernetesConfigTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList">SagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taintsInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints[] TaintsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsList <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsKubernetesConfigTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get"></a>

```csharp
private SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>[]

---


### SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference <a name="SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfigTaints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigTaints">SagemakerClusterInstanceGroupsKubernetesConfigTaints</a>

---


### SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference <a name="SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate">ResetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri">ResetSourceS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnCreate` <a name="ResetOnCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetOnCreate"></a>

```csharp
private void ResetOnCreate()
```

##### `ResetSourceS3Uri` <a name="ResetSourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resetSourceS3Uri"></a>

```csharp
private void ResetSourceS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput">OnCreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput">SourceS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate">OnCreate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri">SourceS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnCreateInput`<sup>Optional</sup> <a name="OnCreateInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreateInput"></a>

```csharp
public string OnCreateInput { get; }
```

- *Type:* string

---

##### `SourceS3UriInput`<sup>Optional</sup> <a name="SourceS3UriInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3UriInput"></a>

```csharp
public string SourceS3UriInput { get; }
```

- *Type:* string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate"></a>

```csharp
public string OnCreate { get; }
```

- *Type:* string

---

##### `SourceS3Uri`<sup>Required</sup> <a name="SourceS3Uri" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri"></a>

```csharp
public string SourceS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsLifeCycleConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---


### SagemakerClusterInstanceGroupsList <a name="SagemakerClusterInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get"></a>

```csharp
private SagemakerClusterInstanceGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>[]

---


### SagemakerClusterInstanceGroupsOutputReference <a name="SagemakerClusterInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements">PutCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs">PutInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig">PutKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig">PutLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig">PutOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig">PutScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements">ResetCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount">ResetCurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName">ResetInstanceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs">ResetInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig">ResetKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig">ResetLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">ResetOnStartDeepHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig">ResetOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig">ResetScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityRequirements` <a name="PutCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements"></a>

```csharp
private void PutCapacityRequirements(SagemakerClusterInstanceGroupsCapacityRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putCapacityRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---

##### `PutInstanceStorageConfigs` <a name="PutInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```csharp
private void PutInstanceStorageConfigs(IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]

---

##### `PutKubernetesConfig` <a name="PutKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig"></a>

```csharp
private void PutKubernetesConfig(SagemakerClusterInstanceGroupsKubernetesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putKubernetesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---

##### `PutLifeCycleConfig` <a name="PutLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig"></a>

```csharp
private void PutLifeCycleConfig(SagemakerClusterInstanceGroupsLifeCycleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putLifeCycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---

##### `PutOverrideVpcConfig` <a name="PutOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```csharp
private void PutOverrideVpcConfig(SagemakerClusterInstanceGroupsOverrideVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---

##### `PutScheduledUpdateConfig` <a name="PutScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig"></a>

```csharp
private void PutScheduledUpdateConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.putScheduledUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---

##### `ResetCapacityRequirements` <a name="ResetCapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCapacityRequirements"></a>

```csharp
private void ResetCapacityRequirements()
```

##### `ResetCurrentCount` <a name="ResetCurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetCurrentCount"></a>

```csharp
private void ResetCurrentCount()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetExecutionRole"></a>

```csharp
private void ResetExecutionRole()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetInstanceGroupName` <a name="ResetInstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```csharp
private void ResetInstanceGroupName()
```

##### `ResetInstanceStorageConfigs` <a name="ResetInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```csharp
private void ResetInstanceStorageConfigs()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetKubernetesConfig` <a name="ResetKubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetKubernetesConfig"></a>

```csharp
private void ResetKubernetesConfig()
```

##### `ResetLifeCycleConfig` <a name="ResetLifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetLifeCycleConfig"></a>

```csharp
private void ResetLifeCycleConfig()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetMinInstanceCount"></a>

```csharp
private void ResetMinInstanceCount()
```

##### `ResetOnStartDeepHealthChecks` <a name="ResetOnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```csharp
private void ResetOnStartDeepHealthChecks()
```

##### `ResetOverrideVpcConfig` <a name="ResetOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```csharp
private void ResetOverrideVpcConfig()
```

##### `ResetScheduledUpdateConfig` <a name="ResetScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetScheduledUpdateConfig"></a>

```csharp
private void ResetScheduledUpdateConfig()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```csharp
private void ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements">CapacityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig">KubernetesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig">LifeCycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig">ScheduledUpdateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput">CapacityRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput">CurrentCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput">InstanceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput">InstanceStorageConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput">KubernetesConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput">LifeCycleConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">OnStartDeepHealthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput">OverrideVpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput">ScheduledUpdateConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount">CurrentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName">InstanceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityRequirements`<sup>Required</sup> <a name="CapacityRequirements" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements"></a>

```csharp
public SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference CapacityRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">SagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a>

---

##### `InstanceStorageConfigs`<sup>Required</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```csharp
public SagemakerClusterInstanceGroupsInstanceStorageConfigsList InstanceStorageConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigsList">SagemakerClusterInstanceGroupsInstanceStorageConfigsList</a>

---

##### `KubernetesConfig`<sup>Required</sup> <a name="KubernetesConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsKubernetesConfigOutputReference KubernetesConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfigOutputReference">SagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a>

---

##### `LifeCycleConfig`<sup>Required</sup> <a name="LifeCycleConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference LifeCycleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">SagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a>

---

##### `OverrideVpcConfig`<sup>Required</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference OverrideVpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `ScheduledUpdateConfig`<sup>Required</sup> <a name="ScheduledUpdateConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference ScheduledUpdateConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a>

---

##### `CapacityRequirementsInput`<sup>Optional</sup> <a name="CapacityRequirementsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.capacityRequirementsInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsCapacityRequirements CapacityRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsCapacityRequirements">SagemakerClusterInstanceGroupsCapacityRequirements</a>

---

##### `CurrentCountInput`<sup>Optional</sup> <a name="CurrentCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCountInput"></a>

```csharp
public double CurrentCountInput { get; }
```

- *Type:* double

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceGroupNameInput`<sup>Optional</sup> <a name="InstanceGroupNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```csharp
public string InstanceGroupNameInput { get; }
```

- *Type:* string

---

##### `InstanceStorageConfigsInput`<sup>Optional</sup> <a name="InstanceStorageConfigsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsInstanceStorageConfigs">SagemakerClusterInstanceGroupsInstanceStorageConfigs</a>[]

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KubernetesConfigInput`<sup>Optional</sup> <a name="KubernetesConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsKubernetesConfig KubernetesConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsKubernetesConfig">SagemakerClusterInstanceGroupsKubernetesConfig</a>

---

##### `LifeCycleConfigInput`<sup>Optional</sup> <a name="LifeCycleConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsLifeCycleConfig LifeCycleConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsLifeCycleConfig">SagemakerClusterInstanceGroupsLifeCycleConfig</a>

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `OnStartDeepHealthChecksInput`<sup>Optional</sup> <a name="OnStartDeepHealthChecksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```csharp
public string[] OnStartDeepHealthChecksInput { get; }
```

- *Type:* string[]

---

##### `OverrideVpcConfigInput`<sup>Optional</sup> <a name="OverrideVpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsOverrideVpcConfig OverrideVpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---

##### `ScheduledUpdateConfigInput`<sup>Optional</sup> <a name="ScheduledUpdateConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfig ScheduledUpdateConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```csharp
public string TrainingPlanArnInput { get; }
```

- *Type:* string

---

##### `CurrentCount`<sup>Required</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.currentCount"></a>

```csharp
public double CurrentCount { get; }
```

- *Type:* double

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceGroupName`<sup>Required</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName"></a>

```csharp
public string InstanceGroupName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `OnStartDeepHealthChecks`<sup>Required</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```csharp
public string[] OnStartDeepHealthChecks { get; }
```

- *Type:* string[]

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```csharp
public string TrainingPlanArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroups">SagemakerClusterInstanceGroups</a>

---


### SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsOverrideVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsOverrideVpcConfig">SagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get"></a>

```csharp
private SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName">ResetAlarmName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarmName"></a>

```csharp
private void ResetAlarmName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy">PutRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy">ResetRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds">ResetWaitIntervalInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```csharp
private void PutAutoRollbackConfiguration(IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `PutRollingUpdatePolicy` <a name="PutRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```csharp
private void PutRollingUpdatePolicy(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```csharp
private void ResetAutoRollbackConfiguration()
```

##### `ResetRollingUpdatePolicy` <a name="ResetRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```csharp
private void ResetRollingUpdatePolicy()
```

##### `ResetWaitIntervalInSeconds` <a name="ResetWaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resetWaitIntervalInSeconds"></a>

```csharp
private void ResetWaitIntervalInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">RollingUpdatePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput">WaitIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference RollingUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `RollingUpdatePolicyInput`<sup>Optional</sup> <a name="RollingUpdatePolicyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy RollingUpdatePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---

##### `WaitIntervalInSecondsInput`<sup>Optional</sup> <a name="WaitIntervalInSecondsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSecondsInput"></a>

```csharp
public double WaitIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">PutMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">PutRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">ResetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">ResetRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumBatchSize` <a name="PutMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```csharp
private void PutMaximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `PutRollbackMaximumBatchSize` <a name="PutRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```csharp
private void PutRollbackMaximumBatchSize(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `ResetMaximumBatchSize` <a name="ResetMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```csharp
private void ResetMaximumBatchSize()
```

##### `ResetRollbackMaximumBatchSize` <a name="ResetRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```csharp
private void ResetRollbackMaximumBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">MaximumBatchSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">RollbackMaximumBatchSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference MaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference RollbackMaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `MaximumBatchSizeInput`<sup>Optional</sup> <a name="MaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize MaximumBatchSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `RollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="RollbackMaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize RollbackMaximumBatchSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference <a name="SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig">PutDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig">ResetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploymentConfig` <a name="PutDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig"></a>

```csharp
private void PutDeploymentConfig(SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.putDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---

##### `ResetDeploymentConfig` <a name="ResetDeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetDeploymentConfig"></a>

```csharp
private void ResetDeploymentConfig()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput">DeploymentConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig"></a>

```csharp
public SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference DeploymentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a>

---

##### `DeploymentConfigInput`<sup>Optional</sup> <a name="DeploymentConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig DeploymentConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterInstanceGroupsScheduledUpdateConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterInstanceGroupsScheduledUpdateConfig">SagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---


### SagemakerClusterOrchestratorEksOutputReference <a name="SagemakerClusterOrchestratorEksOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterOrchestratorEksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn">ResetClusterArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterArn` <a name="ResetClusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.resetClusterArn"></a>

```csharp
private void ResetClusterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterOrchestratorEks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---


### SagemakerClusterOrchestratorOutputReference <a name="SagemakerClusterOrchestratorOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterOrchestratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks">PutEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks">ResetEks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEks` <a name="PutEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks"></a>

```csharp
private void PutEks(SagemakerClusterOrchestratorEks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.putEks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---

##### `ResetEks` <a name="ResetEks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.resetEks"></a>

```csharp
private void ResetEks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput">EksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eks"></a>

```csharp
public SagemakerClusterOrchestratorEksOutputReference Eks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEksOutputReference">SagemakerClusterOrchestratorEksOutputReference</a>

---

##### `EksInput`<sup>Optional</sup> <a name="EksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.eksInput"></a>

```csharp
public IResolvable|SagemakerClusterOrchestratorEks EksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorEks">SagemakerClusterOrchestratorEks</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestratorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterOrchestrator InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterOrchestrator">SagemakerClusterOrchestrator</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB">ResetSizeInGiB</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetPerUnitStorageThroughput"></a>

```csharp
private void ResetPerUnitStorageThroughput()
```

##### `ResetSizeInGiB` <a name="ResetSizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resetSizeInGiB"></a>

```csharp
private void ResetSizeInGiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput">SizeInGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB">SizeInGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughputInput"></a>

```csharp
public double PerUnitStorageThroughputInput { get; }
```

- *Type:* double

---

##### `SizeInGiBInput`<sup>Optional</sup> <a name="SizeInGiBInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiBInput"></a>

```csharp
public double SizeInGiBInput { get; }
```

- *Type:* double

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; }
```

- *Type:* double

---

##### `SizeInGiB`<sup>Required</sup> <a name="SizeInGiB" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB"></a>

```csharp
public double SizeInGiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig">PutFsxLustreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig">ResetFsxLustreConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFsxLustreConfig` <a name="PutFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig"></a>

```csharp
private void PutFsxLustreConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.putFsxLustreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---

##### `ResetFsxLustreConfig` <a name="ResetFsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resetFsxLustreConfig"></a>

```csharp
private void ResetFsxLustreConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig">FsxLustreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput">FsxLustreConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsxLustreConfig`<sup>Required</sup> <a name="FsxLustreConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference FsxLustreConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a>

---

##### `FsxLustreConfigInput`<sup>Optional</sup> <a name="FsxLustreConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig FsxLustreConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">RootVolume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolumeInput"></a>

```csharp
public bool|IResolvable RootVolumeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```csharp
public bool|IResolvable RootVolume { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get"></a>

```csharp
private SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]

---


### SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig">PutEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig">ResetEbsVolumeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumeConfig` <a name="PutEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig"></a>

```csharp
private void PutEbsVolumeConfig(SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.putEbsVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `ResetEbsVolumeConfig` <a name="ResetEbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resetEbsVolumeConfig"></a>

```csharp
private void ResetEbsVolumeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput">EbsVolumeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumeConfig`<sup>Required</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference EbsVolumeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `EbsVolumeConfigInput`<sup>Optional</sup> <a name="EbsVolumeConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig EbsVolumeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>

---


### SagemakerClusterRestrictedInstanceGroupsList <a name="SagemakerClusterRestrictedInstanceGroupsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get"></a>

```csharp
private SagemakerClusterRestrictedInstanceGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>[]

---


### SagemakerClusterRestrictedInstanceGroupsOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs">PutInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig">PutOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount">ResetCurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName">ResetInstanceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs">ResetInstanceStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks">ResetOnStartDeepHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig">ResetOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig"></a>

```csharp
private void PutEnvironmentConfig(SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---

##### `PutInstanceStorageConfigs` <a name="PutInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs"></a>

```csharp
private void PutInstanceStorageConfigs(IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putInstanceStorageConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]

---

##### `PutOverrideVpcConfig` <a name="PutOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig"></a>

```csharp
private void PutOverrideVpcConfig(SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.putOverrideVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---

##### `ResetCurrentCount` <a name="ResetCurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetCurrentCount"></a>

```csharp
private void ResetCurrentCount()
```

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetEnvironmentConfig"></a>

```csharp
private void ResetEnvironmentConfig()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetExecutionRole"></a>

```csharp
private void ResetExecutionRole()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetInstanceGroupName` <a name="ResetInstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceGroupName"></a>

```csharp
private void ResetInstanceGroupName()
```

##### `ResetInstanceStorageConfigs` <a name="ResetInstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceStorageConfigs"></a>

```csharp
private void ResetInstanceStorageConfigs()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetOnStartDeepHealthChecks` <a name="ResetOnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOnStartDeepHealthChecks"></a>

```csharp
private void ResetOnStartDeepHealthChecks()
```

##### `ResetOverrideVpcConfig` <a name="ResetOverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetOverrideVpcConfig"></a>

```csharp
private void ResetOverrideVpcConfig()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.resetTrainingPlanArn"></a>

```csharp
private void ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput">CurrentCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput">InstanceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput">InstanceStorageConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput">OnStartDeepHealthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput">OverrideVpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount">CurrentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName">InstanceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference EnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a>

---

##### `InstanceStorageConfigs`<sup>Required</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList InstanceStorageConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a>

---

##### `OverrideVpcConfig`<sup>Required</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```csharp
public SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference OverrideVpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `CurrentCountInput`<sup>Optional</sup> <a name="CurrentCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCountInput"></a>

```csharp
public double CurrentCountInput { get; }
```

- *Type:* double

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig EnvironmentConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">SagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceGroupNameInput`<sup>Optional</sup> <a name="InstanceGroupNameInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupNameInput"></a>

```csharp
public string InstanceGroupNameInput { get; }
```

- *Type:* string

---

##### `InstanceStorageConfigsInput`<sup>Optional</sup> <a name="InstanceStorageConfigsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigsInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs[] InstanceStorageConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">SagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>[]

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `OnStartDeepHealthChecksInput`<sup>Optional</sup> <a name="OnStartDeepHealthChecksInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecksInput"></a>

```csharp
public string[] OnStartDeepHealthChecksInput { get; }
```

- *Type:* string[]

---

##### `OverrideVpcConfigInput`<sup>Optional</sup> <a name="OverrideVpcConfigInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig OverrideVpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArnInput"></a>

```csharp
public string TrainingPlanArnInput { get; }
```

- *Type:* string

---

##### `CurrentCount`<sup>Required</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount"></a>

```csharp
public double CurrentCount { get; }
```

- *Type:* double

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceGroupName`<sup>Required</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName"></a>

```csharp
public string InstanceGroupName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `OnStartDeepHealthChecks`<sup>Required</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```csharp
public string[] OnStartDeepHealthChecks { get; }
```

- *Type:* string[]

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```csharp
public string TrainingPlanArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroups">SagemakerClusterRestrictedInstanceGroups</a>

---


### SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference <a name="SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">SagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---


### SagemakerClusterTagsList <a name="SagemakerClusterTagsList" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get"></a>

```csharp
private SagemakerClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>[]

---


### SagemakerClusterTagsOutputReference <a name="SagemakerClusterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTags">SagemakerClusterTags</a>

---


### SagemakerClusterTieredStorageConfigOutputReference <a name="SagemakerClusterTieredStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterTieredStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage">ResetInstanceMemoryAllocationPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceMemoryAllocationPercentage` <a name="ResetInstanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetInstanceMemoryAllocationPercentage"></a>

```csharp
private void ResetInstanceMemoryAllocationPercentage()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput">InstanceMemoryAllocationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage">InstanceMemoryAllocationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceMemoryAllocationPercentageInput`<sup>Optional</sup> <a name="InstanceMemoryAllocationPercentageInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentageInput"></a>

```csharp
public double InstanceMemoryAllocationPercentageInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `InstanceMemoryAllocationPercentage`<sup>Required</sup> <a name="InstanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage"></a>

```csharp
public double InstanceMemoryAllocationPercentage { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterTieredStorageConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterTieredStorageConfig">SagemakerClusterTieredStorageConfig</a>

---


### SagemakerClusterVpcConfigOutputReference <a name="SagemakerClusterVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerCluster.SagemakerClusterVpcConfig">SagemakerClusterVpcConfig</a>

---



