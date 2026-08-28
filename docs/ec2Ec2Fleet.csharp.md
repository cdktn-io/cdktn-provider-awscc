# `ec2Ec2Fleet` Submodule <a name="`ec2Ec2Fleet` Submodule" id="@cdktn/provider-awscc.ec2Ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Ec2Fleet <a name="Ec2Ec2Fleet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet awscc_ec2_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2Fleet(Construct Scope, string Id, Ec2Ec2FleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig">Ec2Ec2FleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig">Ec2Ec2FleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putLaunchTemplateConfigs">PutLaunchTemplateConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putOnDemandOptions">PutOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putReservedCapacityOptions">PutReservedCapacityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putSpotOptions">PutSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTargetCapacitySpecification">PutTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetExcessCapacityTerminationPolicy">ResetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetOnDemandOptions">ResetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetReplaceUnhealthyInstances">ResetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetReservedCapacityOptions">ResetReservedCapacityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetSpotOptions">ResetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetTerminateInstancesWithExpiration">ResetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetValidFrom">ResetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLaunchTemplateConfigs` <a name="PutLaunchTemplateConfigs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putLaunchTemplateConfigs"></a>

```csharp
private void PutLaunchTemplateConfigs(IResolvable|Ec2Ec2FleetLaunchTemplateConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putLaunchTemplateConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]

---

##### `PutOnDemandOptions` <a name="PutOnDemandOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putOnDemandOptions"></a>

```csharp
private void PutOnDemandOptions(Ec2Ec2FleetOnDemandOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putOnDemandOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a>

---

##### `PutReservedCapacityOptions` <a name="PutReservedCapacityOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putReservedCapacityOptions"></a>

```csharp
private void PutReservedCapacityOptions(Ec2Ec2FleetReservedCapacityOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putReservedCapacityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a>

---

##### `PutSpotOptions` <a name="PutSpotOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putSpotOptions"></a>

```csharp
private void PutSpotOptions(Ec2Ec2FleetSpotOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a>

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(IResolvable|Ec2Ec2FleetTagSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTagSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]

---

##### `PutTargetCapacitySpecification` <a name="PutTargetCapacitySpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTargetCapacitySpecification"></a>

```csharp
private void PutTargetCapacitySpecification(Ec2Ec2FleetTargetCapacitySpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.putTargetCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a>

---

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetExcessCapacityTerminationPolicy` <a name="ResetExcessCapacityTerminationPolicy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetExcessCapacityTerminationPolicy"></a>

```csharp
private void ResetExcessCapacityTerminationPolicy()
```

##### `ResetOnDemandOptions` <a name="ResetOnDemandOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetOnDemandOptions"></a>

```csharp
private void ResetOnDemandOptions()
```

##### `ResetReplaceUnhealthyInstances` <a name="ResetReplaceUnhealthyInstances" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetReplaceUnhealthyInstances"></a>

```csharp
private void ResetReplaceUnhealthyInstances()
```

##### `ResetReservedCapacityOptions` <a name="ResetReservedCapacityOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetReservedCapacityOptions"></a>

```csharp
private void ResetReservedCapacityOptions()
```

##### `ResetSpotOptions` <a name="ResetSpotOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetSpotOptions"></a>

```csharp
private void ResetSpotOptions()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetTerminateInstancesWithExpiration` <a name="ResetTerminateInstancesWithExpiration" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetTerminateInstancesWithExpiration"></a>

```csharp
private void ResetTerminateInstancesWithExpiration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValidFrom` <a name="ResetValidFrom" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetValidFrom"></a>

```csharp
private void ResetValidFrom()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.resetValidUntil"></a>

```csharp
private void ResetValidUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Ec2Fleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Ec2Fleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Ec2Fleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Ec2Fleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2Ec2Fleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2Ec2Fleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Ec2Fleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Ec2Fleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Ec2Fleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.launchTemplateConfigs">LaunchTemplateConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList">Ec2Ec2FleetLaunchTemplateConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.onDemandOptions">OnDemandOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference">Ec2Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.reservedCapacityOptions">ReservedCapacityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference">Ec2Ec2FleetReservedCapacityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference">Ec2Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList">Ec2Ec2FleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.targetCapacitySpecification">TargetCapacitySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference">Ec2Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.excessCapacityTerminationPolicyInput">ExcessCapacityTerminationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.launchTemplateConfigsInput">LaunchTemplateConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.onDemandOptionsInput">OnDemandOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.replaceUnhealthyInstancesInput">ReplaceUnhealthyInstancesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.reservedCapacityOptionsInput">ReservedCapacityOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.spotOptionsInput">SpotOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.targetCapacitySpecificationInput">TargetCapacitySpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terminateInstancesWithExpirationInput">TerminateInstancesWithExpirationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validFromInput">ValidFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validUntilInput">ValidUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validFrom">ValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validUntil">ValidUntil</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchTemplateConfigs`<sup>Required</sup> <a name="LaunchTemplateConfigs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.launchTemplateConfigs"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsList LaunchTemplateConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList">Ec2Ec2FleetLaunchTemplateConfigsList</a>

---

##### `OnDemandOptions`<sup>Required</sup> <a name="OnDemandOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.onDemandOptions"></a>

```csharp
public Ec2Ec2FleetOnDemandOptionsOutputReference OnDemandOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference">Ec2Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `ReservedCapacityOptions`<sup>Required</sup> <a name="ReservedCapacityOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.reservedCapacityOptions"></a>

```csharp
public Ec2Ec2FleetReservedCapacityOptionsOutputReference ReservedCapacityOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference">Ec2Ec2FleetReservedCapacityOptionsOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.spotOptions"></a>

```csharp
public Ec2Ec2FleetSpotOptionsOutputReference SpotOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference">Ec2Ec2FleetSpotOptionsOutputReference</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tagSpecifications"></a>

```csharp
public Ec2Ec2FleetTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList">Ec2Ec2FleetTagSpecificationsList</a>

---

##### `TargetCapacitySpecification`<sup>Required</sup> <a name="TargetCapacitySpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.targetCapacitySpecification"></a>

```csharp
public Ec2Ec2FleetTargetCapacitySpecificationOutputReference TargetCapacitySpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference">Ec2Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `ExcessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.excessCapacityTerminationPolicyInput"></a>

```csharp
public string ExcessCapacityTerminationPolicyInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateConfigsInput`<sup>Optional</sup> <a name="LaunchTemplateConfigsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.launchTemplateConfigsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigs[] LaunchTemplateConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]

---

##### `OnDemandOptionsInput`<sup>Optional</sup> <a name="OnDemandOptionsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.onDemandOptionsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetOnDemandOptions OnDemandOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a>

---

##### `ReplaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="ReplaceUnhealthyInstancesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.replaceUnhealthyInstancesInput"></a>

```csharp
public bool|IResolvable ReplaceUnhealthyInstancesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReservedCapacityOptionsInput`<sup>Optional</sup> <a name="ReservedCapacityOptionsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.reservedCapacityOptionsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetReservedCapacityOptions ReservedCapacityOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a>

---

##### `SpotOptionsInput`<sup>Optional</sup> <a name="SpotOptionsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.spotOptionsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptions SpotOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a>

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tagSpecificationsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecifications[] TagSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]

---

##### `TargetCapacitySpecificationInput`<sup>Optional</sup> <a name="TargetCapacitySpecificationInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.targetCapacitySpecificationInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetTargetCapacitySpecification TargetCapacitySpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a>

---

##### `TerminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="TerminateInstancesWithExpirationInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terminateInstancesWithExpirationInput"></a>

```csharp
public bool|IResolvable TerminateInstancesWithExpirationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidFromInput`<sup>Optional</sup> <a name="ValidFromInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validFromInput"></a>

```csharp
public string ValidFromInput { get; }
```

- *Type:* string

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validUntilInput"></a>

```csharp
public string ValidUntilInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `ExcessCapacityTerminationPolicy`<sup>Required</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```csharp
public string ExcessCapacityTerminationPolicy { get; }
```

- *Type:* string

---

##### `ReplaceUnhealthyInstances`<sup>Required</sup> <a name="ReplaceUnhealthyInstances" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.replaceUnhealthyInstances"></a>

```csharp
public bool|IResolvable ReplaceUnhealthyInstances { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TerminateInstancesWithExpiration`<sup>Required</sup> <a name="TerminateInstancesWithExpiration" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```csharp
public bool|IResolvable TerminateInstancesWithExpiration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validFrom"></a>

```csharp
public string ValidFrom { get; }
```

- *Type:* string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.validUntil"></a>

```csharp
public string ValidUntil { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2Fleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2Ec2FleetConfig <a name="Ec2Ec2FleetConfig" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigs[] LaunchTemplateConfigs,
    Ec2Ec2FleetTargetCapacitySpecification TargetCapacitySpecification,
    string Context = null,
    string ExcessCapacityTerminationPolicy = null,
    Ec2Ec2FleetOnDemandOptions OnDemandOptions = null,
    bool|IResolvable ReplaceUnhealthyInstances = null,
    Ec2Ec2FleetReservedCapacityOptions ReservedCapacityOptions = null,
    Ec2Ec2FleetSpotOptions SpotOptions = null,
    IResolvable|Ec2Ec2FleetTagSpecifications[] TagSpecifications = null,
    bool|IResolvable TerminateInstancesWithExpiration = null,
    string Type = null,
    string ValidFrom = null,
    string ValidUntil = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.launchTemplateConfigs">LaunchTemplateConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_configs Ec2Ec2Fleet#launch_template_configs}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.targetCapacitySpecification">TargetCapacitySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_specification Ec2Ec2Fleet#target_capacity_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.context">Context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#context Ec2Ec2Fleet#context}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excess_capacity_termination_policy Ec2Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.onDemandOptions">OnDemandOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_options Ec2Ec2Fleet#on_demand_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replace_unhealthy_instances Ec2Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.reservedCapacityOptions">ReservedCapacityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reserved_capacity_options Ec2Ec2Fleet#reserved_capacity_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_options Ec2Ec2Fleet#spot_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tag_specifications Ec2Ec2Fleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#terminate_instances_with_expiration Ec2Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#type Ec2Ec2Fleet#type}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.validFrom">ValidFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_from Ec2Ec2Fleet#valid_from}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.validUntil">ValidUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_until Ec2Ec2Fleet#valid_until}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LaunchTemplateConfigs`<sup>Required</sup> <a name="LaunchTemplateConfigs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.launchTemplateConfigs"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigs[] LaunchTemplateConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_configs Ec2Ec2Fleet#launch_template_configs}.

---

##### `TargetCapacitySpecification`<sup>Required</sup> <a name="TargetCapacitySpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.targetCapacitySpecification"></a>

```csharp
public Ec2Ec2FleetTargetCapacitySpecification TargetCapacitySpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_specification Ec2Ec2Fleet#target_capacity_specification}.

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#context Ec2Ec2Fleet#context}.

---

##### `ExcessCapacityTerminationPolicy`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.excessCapacityTerminationPolicy"></a>

```csharp
public string ExcessCapacityTerminationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excess_capacity_termination_policy Ec2Ec2Fleet#excess_capacity_termination_policy}.

---

##### `OnDemandOptions`<sup>Optional</sup> <a name="OnDemandOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.onDemandOptions"></a>

```csharp
public Ec2Ec2FleetOnDemandOptions OnDemandOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_options Ec2Ec2Fleet#on_demand_options}.

---

##### `ReplaceUnhealthyInstances`<sup>Optional</sup> <a name="ReplaceUnhealthyInstances" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.replaceUnhealthyInstances"></a>

```csharp
public bool|IResolvable ReplaceUnhealthyInstances { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replace_unhealthy_instances Ec2Ec2Fleet#replace_unhealthy_instances}.

---

##### `ReservedCapacityOptions`<sup>Optional</sup> <a name="ReservedCapacityOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.reservedCapacityOptions"></a>

```csharp
public Ec2Ec2FleetReservedCapacityOptions ReservedCapacityOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reserved_capacity_options Ec2Ec2Fleet#reserved_capacity_options}.

---

##### `SpotOptions`<sup>Optional</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.spotOptions"></a>

```csharp
public Ec2Ec2FleetSpotOptions SpotOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_options Ec2Ec2Fleet#spot_options}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.tagSpecifications"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecifications[] TagSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tag_specifications Ec2Ec2Fleet#tag_specifications}.

---

##### `TerminateInstancesWithExpiration`<sup>Optional</sup> <a name="TerminateInstancesWithExpiration" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.terminateInstancesWithExpiration"></a>

```csharp
public bool|IResolvable TerminateInstancesWithExpiration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#terminate_instances_with_expiration Ec2Ec2Fleet#terminate_instances_with_expiration}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#type Ec2Ec2Fleet#type}.

---

##### `ValidFrom`<sup>Optional</sup> <a name="ValidFrom" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.validFrom"></a>

```csharp
public string ValidFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_from Ec2Ec2Fleet#valid_from}.

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetConfig.property.validUntil"></a>

```csharp
public string ValidUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_until Ec2Ec2Fleet#valid_until}.

---

### Ec2Ec2FleetLaunchTemplateConfigs <a name="Ec2Ec2FleetLaunchTemplateConfigs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigs {
    Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification LaunchTemplateSpecification = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides[] Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification Ec2Ec2Fleet#launch_template_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs.property.overrides">Overrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#overrides Ec2Ec2Fleet#overrides}. |

---

##### `LaunchTemplateSpecification`<sup>Optional</sup> <a name="LaunchTemplateSpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs.property.launchTemplateSpecification"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification LaunchTemplateSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification Ec2Ec2Fleet#launch_template_specification}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs.property.overrides"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides[] Overrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#overrides Ec2Ec2Fleet#overrides}.

---

### Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification <a name="Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string LaunchTemplateSpecificationUserData = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_id Ec2Ec2Fleet#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_name Ec2Ec2Fleet#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateSpecificationUserData">LaunchTemplateSpecificationUserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification_user_data Ec2Ec2Fleet#launch_template_specification_user_data}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#version Ec2Ec2Fleet#version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_id Ec2Ec2Fleet#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_name Ec2Ec2Fleet#launch_template_name}.

---

##### `LaunchTemplateSpecificationUserData`<sup>Optional</sup> <a name="LaunchTemplateSpecificationUserData" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.launchTemplateSpecificationUserData"></a>

```csharp
public string LaunchTemplateSpecificationUserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification_user_data Ec2Ec2Fleet#launch_template_specification_user_data}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#version Ec2Ec2Fleet#version}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverrides <a name="Ec2Ec2FleetLaunchTemplateConfigsOverrides" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverrides {
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings[] BlockDeviceMappings = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile IamInstanceProfile = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements InstanceRequirements = null,
    string InstanceType = null,
    string KeyName = null,
    string MaxPrice = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions MetadataOptions = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces[] NetworkInterfaces = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement Placement = null,
    double Priority = null,
    string SubnetId = null,
    double WeightedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone Ec2Ec2Fleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone_id Ec2Ec2Fleet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#block_device_mappings Ec2Ec2Fleet#block_device_mappings}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iam_instance_profile Ec2Ec2Fleet#iam_instance_profile}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_requirements Ec2Ec2Fleet#instance_requirements}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_type Ec2Ec2Fleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key_name Ec2Ec2Fleet#key_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.maxPrice">MaxPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_price Ec2Ec2Fleet#max_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#metadata_options Ec2Ec2Fleet#metadata_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.networkInterfaces">NetworkInterfaces</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interfaces Ec2Ec2Fleet#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#placement Ec2Ec2Fleet#placement}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#priority Ec2Ec2Fleet#priority}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id Ec2Ec2Fleet#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.weightedCapacity">WeightedCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#weighted_capacity Ec2Ec2Fleet#weighted_capacity}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone Ec2Ec2Fleet#availability_zone}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone_id Ec2Ec2Fleet#availability_zone_id}.

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.blockDeviceMappings"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings[] BlockDeviceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#block_device_mappings Ec2Ec2Fleet#block_device_mappings}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.iamInstanceProfile"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile IamInstanceProfile { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iam_instance_profile Ec2Ec2Fleet#iam_instance_profile}.

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.instanceRequirements"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements InstanceRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_requirements Ec2Ec2Fleet#instance_requirements}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_type Ec2Ec2Fleet#instance_type}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key_name Ec2Ec2Fleet#key_name}.

---

##### `MaxPrice`<sup>Optional</sup> <a name="MaxPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.maxPrice"></a>

```csharp
public string MaxPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_price Ec2Ec2Fleet#max_price}.

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.metadataOptions"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#metadata_options Ec2Ec2Fleet#metadata_options}.

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.networkInterfaces"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces[] NetworkInterfaces { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interfaces Ec2Ec2Fleet#network_interfaces}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.placement"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#placement Ec2Ec2Fleet#placement}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#priority Ec2Ec2Fleet#priority}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id Ec2Ec2Fleet#subnet_id}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides.property.weightedCapacity"></a>

```csharp
public double WeightedCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#weighted_capacity Ec2Ec2Fleet#weighted_capacity}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings {
    string DeviceName = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_name Ec2Ec2Fleet#device_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ebs Ec2Ec2Fleet#ebs}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#no_device Ec2Ec2Fleet#no_device}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#virtual_name Ec2Ec2Fleet#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_name Ec2Ec2Fleet#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.ebs"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ebs Ec2Ec2Fleet#ebs}.

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#no_device Ec2Ec2Fleet#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#virtual_name Ec2Ec2Fleet#virtual_name}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs {
    bool|IResolvable DeleteOnTermination = null,
    bool|IResolvable Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination Ec2Ec2Fleet#delete_on_termination}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#encrypted Ec2Ec2Fleet#encrypted}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iops Ec2Ec2Fleet#iops}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#kms_key_id Ec2Ec2Fleet#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#snapshot_id Ec2Ec2Fleet#snapshot_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_size Ec2Ec2Fleet#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_type Ec2Ec2Fleet#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination Ec2Ec2Fleet#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#encrypted Ec2Ec2Fleet#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iops Ec2Ec2Fleet#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#kms_key_id Ec2Ec2Fleet#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#snapshot_id Ec2Ec2Fleet#snapshot_id}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_size Ec2Ec2Fleet#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_type Ec2Ec2Fleet#volume_type}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile {
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#arn Ec2Ec2Fleet#arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#name Ec2Ec2Fleet#name}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#arn Ec2Ec2Fleet#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#name Ec2Ec2Fleet#name}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements {
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount AcceleratorCount = null,
    string[] AcceleratorManufacturers = null,
    string[] AcceleratorNames = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiB = null,
    string[] AcceleratorTypes = null,
    string[] AllowedInstanceTypes = null,
    string BareMetal = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors BaselinePerformanceFactors = null,
    string BurstablePerformance = null,
    string[] CpuManufacturers = null,
    string[] ExcludedInstanceTypes = null,
    string[] InstanceGenerations = null,
    string LocalStorage = null,
    string[] LocalStorageTypes = null,
    double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu MemoryGiBPerVCpu = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB MemoryMiB = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbps = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount = null,
    double OnDemandMaxPricePercentageOverLowestPrice = null,
    bool|IResolvable RequireEncryptionInTransit = null,
    bool|IResolvable RequireHibernateSupport = null,
    double SpotMaxPricePercentageOverLowestPrice = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb = null,
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount VCpuCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_count Ec2Ec2Fleet#accelerator_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_manufacturers Ec2Ec2Fleet#accelerator_manufacturers}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_names Ec2Ec2Fleet#accelerator_names}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_total_memory_mi_b Ec2Ec2Fleet#accelerator_total_memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_types Ec2Ec2Fleet#accelerator_types}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allowed_instance_types Ec2Ec2Fleet#allowed_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.bareMetal">BareMetal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#bare_metal Ec2Ec2Fleet#bare_metal}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Ec2Fleet#baseline_ebs_bandwidth_mbps}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.baselinePerformanceFactors">BaselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_performance_factors Ec2Ec2Fleet#baseline_performance_factors}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#burstable_performance Ec2Ec2Fleet#burstable_performance}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu_manufacturers Ec2Ec2Fleet#cpu_manufacturers}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excluded_instance_types Ec2Ec2Fleet#excluded_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_generations Ec2Ec2Fleet#instance_generations}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.localStorage">LocalStorage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage Ec2Ec2Fleet#local_storage}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage_types Ec2Ec2Fleet#local_storage_types}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price Ec2Ec2Fleet#max_spot_price_as_percentage_of_optimal_on_demand_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.memoryGiBPerVCpu">MemoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_gi_b_per_v_cpu Ec2Ec2Fleet#memory_gi_b_per_v_cpu}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_mi_b Ec2Ec2Fleet#memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_bandwidth_gbps Ec2Ec2Fleet#network_bandwidth_gbps}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_count Ec2Ec2Fleet#network_interface_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.requireEncryptionInTransit">RequireEncryptionInTransit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_encryption_in_transit Ec2Ec2Fleet#require_encryption_in_transit}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_hibernate_support Ec2Ec2Fleet#require_hibernate_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Ec2Fleet#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_local_storage_gb Ec2Ec2Fleet#total_local_storage_gb}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#v_cpu_count Ec2Ec2Fleet#v_cpu_count}. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount AcceleratorCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_count Ec2Ec2Fleet#accelerator_count}.

---

##### `AcceleratorManufacturers`<sup>Optional</sup> <a name="AcceleratorManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_manufacturers Ec2Ec2Fleet#accelerator_manufacturers}.

---

##### `AcceleratorNames`<sup>Optional</sup> <a name="AcceleratorNames" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_names Ec2Ec2Fleet#accelerator_names}.

---

##### `AcceleratorTotalMemoryMiB`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorTotalMemoryMiB"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiB { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_total_memory_mi_b Ec2Ec2Fleet#accelerator_total_memory_mi_b}.

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_types Ec2Ec2Fleet#accelerator_types}.

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allowed_instance_types Ec2Ec2Fleet#allowed_instance_types}.

---

##### `BareMetal`<sup>Optional</sup> <a name="BareMetal" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.bareMetal"></a>

```csharp
public string BareMetal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#bare_metal Ec2Ec2Fleet#bare_metal}.

---

##### `BaselineEbsBandwidthMbps`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Ec2Fleet#baseline_ebs_bandwidth_mbps}.

---

##### `BaselinePerformanceFactors`<sup>Optional</sup> <a name="BaselinePerformanceFactors" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.baselinePerformanceFactors"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors BaselinePerformanceFactors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_performance_factors Ec2Ec2Fleet#baseline_performance_factors}.

---

##### `BurstablePerformance`<sup>Optional</sup> <a name="BurstablePerformance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#burstable_performance Ec2Ec2Fleet#burstable_performance}.

---

##### `CpuManufacturers`<sup>Optional</sup> <a name="CpuManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu_manufacturers Ec2Ec2Fleet#cpu_manufacturers}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excluded_instance_types Ec2Ec2Fleet#excluded_instance_types}.

---

##### `InstanceGenerations`<sup>Optional</sup> <a name="InstanceGenerations" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_generations Ec2Ec2Fleet#instance_generations}.

---

##### `LocalStorage`<sup>Optional</sup> <a name="LocalStorage" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.localStorage"></a>

```csharp
public string LocalStorage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage Ec2Ec2Fleet#local_storage}.

---

##### `LocalStorageTypes`<sup>Optional</sup> <a name="LocalStorageTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage_types Ec2Ec2Fleet#local_storage_types}.

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Optional</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price Ec2Ec2Fleet#max_spot_price_as_percentage_of_optimal_on_demand_price}.

---

##### `MemoryGiBPerVCpu`<sup>Optional</sup> <a name="MemoryGiBPerVCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.memoryGiBPerVCpu"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu MemoryGiBPerVCpu { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_gi_b_per_v_cpu Ec2Ec2Fleet#memory_gi_b_per_v_cpu}.

---

##### `MemoryMiB`<sup>Optional</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.memoryMiB"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB MemoryMiB { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_mi_b Ec2Ec2Fleet#memory_mi_b}.

---

##### `NetworkBandwidthGbps`<sup>Optional</sup> <a name="NetworkBandwidthGbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.networkBandwidthGbps"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbps { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_bandwidth_gbps Ec2Ec2Fleet#network_bandwidth_gbps}.

---

##### `NetworkInterfaceCount`<sup>Optional</sup> <a name="NetworkInterfaceCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.networkInterfaceCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_count Ec2Ec2Fleet#network_interface_count}.

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}.

---

##### `RequireEncryptionInTransit`<sup>Optional</sup> <a name="RequireEncryptionInTransit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.requireEncryptionInTransit"></a>

```csharp
public bool|IResolvable RequireEncryptionInTransit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_encryption_in_transit Ec2Ec2Fleet#require_encryption_in_transit}.

---

##### `RequireHibernateSupport`<sup>Optional</sup> <a name="RequireHibernateSupport" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.requireHibernateSupport"></a>

```csharp
public bool|IResolvable RequireHibernateSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_hibernate_support Ec2Ec2Fleet#require_hibernate_support}.

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Ec2Fleet#spot_max_price_percentage_over_lowest_price}.

---

##### `TotalLocalStorageGb`<sup>Optional</sup> <a name="TotalLocalStorageGb" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.totalLocalStorageGb"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_local_storage_gb Ec2Ec2Fleet#total_local_storage_gb}.

---

##### `VCpuCount`<sup>Optional</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.property.vCpuCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount VCpuCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#v_cpu_count Ec2Ec2Fleet#v_cpu_count}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors {
    Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu Cpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors.property.cpu">Cpu</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu Ec2Ec2Fleet#cpu}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors.property.cpu"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu Cpu { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu Ec2Ec2Fleet#cpu}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences[] References = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.property.references">References</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#references Ec2Ec2Fleet#references}. |

---

##### `References`<sup>Optional</sup> <a name="References" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.property.references"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences[] References { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#references Ec2Ec2Fleet#references}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {
    string InstanceFamily = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_family Ec2Ec2Fleet#instance_family}. |

---

##### `InstanceFamily`<sup>Optional</sup> <a name="InstanceFamily" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_family Ec2Ec2Fleet#instance_family}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max Ec2Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min Ec2Ec2Fleet#min}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions {
    string HttpEndpoint = null,
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_endpoint Ec2Ec2Fleet#http_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_put_response_hop_limit Ec2Ec2Fleet#http_put_response_hop_limit}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_tokens Ec2Ec2Fleet#http_tokens}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_endpoint Ec2Ec2Fleet#http_endpoint}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_put_response_hop_limit Ec2Ec2Fleet#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_tokens Ec2Ec2Fleet#http_tokens}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces {
    bool|IResolvable AssociatePublicIpAddress = null,
    bool|IResolvable DeleteOnTermination = null,
    string Description = null,
    double DeviceIndex = null,
    string[] Groups = null,
    string InterfaceType = null,
    double Ipv6AddressCount = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses[] Ipv6Addresses = null,
    double NetworkCardIndex = null,
    string NetworkInterfaceId = null,
    string PrivateIpAddress = null,
    IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses[] PrivateIpAddresses = null,
    double SecondaryPrivateIpAddressCount = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#associate_public_ip_address Ec2Ec2Fleet#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination Ec2Ec2Fleet#delete_on_termination}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#description Ec2Ec2Fleet#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_index Ec2Ec2Fleet#device_index}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#groups Ec2Ec2Fleet#groups}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.interfaceType">InterfaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#interface_type Ec2Ec2Fleet#interface_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address_count Ec2Ec2Fleet#ipv_6_address_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_addresses Ec2Ec2Fleet#ipv_6_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_card_index Ec2Ec2Fleet#network_card_index}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_id Ec2Ec2Fleet#network_interface_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address Ec2Ec2Fleet#private_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_addresses Ec2Ec2Fleet#private_ip_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#secondary_private_ip_address_count Ec2Ec2Fleet#secondary_private_ip_address_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id Ec2Ec2Fleet#subnet_id}. |

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#associate_public_ip_address Ec2Ec2Fleet#associate_public_ip_address}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination Ec2Ec2Fleet#delete_on_termination}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#description Ec2Ec2Fleet#description}.

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_index Ec2Ec2Fleet#device_index}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#groups Ec2Ec2Fleet#groups}.

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.interfaceType"></a>

```csharp
public string InterfaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#interface_type Ec2Ec2Fleet#interface_type}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address_count Ec2Ec2Fleet#ipv_6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.ipv6Addresses"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses[] Ipv6Addresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_addresses Ec2Ec2Fleet#ipv_6_addresses}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_card_index Ec2Ec2Fleet#network_card_index}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_id Ec2Ec2Fleet#network_interface_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address Ec2Ec2Fleet#private_ip_address}.

---

##### `PrivateIpAddresses`<sup>Optional</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.privateIpAddresses"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses[] PrivateIpAddresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_addresses Ec2Ec2Fleet#private_ip_addresses}.

---

##### `SecondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#secondary_private_ip_address_count Ec2Ec2Fleet#secondary_private_ip_address_count}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id Ec2Ec2Fleet#subnet_id}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses {
    string Ipv6Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address Ec2Ec2Fleet#ipv_6_address}. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address Ec2Ec2Fleet#ipv_6_address}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses {
    bool|IResolvable Primary = null,
    string PrivateIpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#primary Ec2Ec2Fleet#primary}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address Ec2Ec2Fleet#private_ip_address}. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#primary Ec2Ec2Fleet#primary}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address Ec2Ec2Fleet#private_ip_address}.

---

### Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement {
    string Affinity = null,
    string AvailabilityZone = null,
    string GroupName = null,
    string HostId = null,
    string HostResourceGroupArn = null,
    double PartitionNumber = null,
    string SpreadDomain = null,
    string Tenancy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.affinity">Affinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#affinity Ec2Ec2Fleet#affinity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone Ec2Ec2Fleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#group_name Ec2Ec2Fleet#group_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.hostId">HostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_id Ec2Ec2Fleet#host_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_resource_group_arn Ec2Ec2Fleet#host_resource_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.partitionNumber">PartitionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#partition_number Ec2Ec2Fleet#partition_number}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.spreadDomain">SpreadDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spread_domain Ec2Ec2Fleet#spread_domain}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tenancy Ec2Ec2Fleet#tenancy}. |

---

##### `Affinity`<sup>Optional</sup> <a name="Affinity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.affinity"></a>

```csharp
public string Affinity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#affinity Ec2Ec2Fleet#affinity}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone Ec2Ec2Fleet#availability_zone}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#group_name Ec2Ec2Fleet#group_name}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_id Ec2Ec2Fleet#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_resource_group_arn Ec2Ec2Fleet#host_resource_group_arn}.

---

##### `PartitionNumber`<sup>Optional</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.partitionNumber"></a>

```csharp
public double PartitionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#partition_number Ec2Ec2Fleet#partition_number}.

---

##### `SpreadDomain`<sup>Optional</sup> <a name="SpreadDomain" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.spreadDomain"></a>

```csharp
public string SpreadDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spread_domain Ec2Ec2Fleet#spread_domain}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tenancy Ec2Ec2Fleet#tenancy}.

---

### Ec2Ec2FleetOnDemandOptions <a name="Ec2Ec2FleetOnDemandOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetOnDemandOptions {
    string AllocationStrategy = null,
    Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions CapacityReservationOptions = null,
    string MaxTotalPrice = null,
    double MinTargetCapacity = null,
    bool|IResolvable SingleAvailabilityZone = null,
    bool|IResolvable SingleInstanceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy Ec2Ec2Fleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.capacityReservationOptions">CapacityReservationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_reservation_options Ec2Ec2Fleet#capacity_reservation_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price Ec2Ec2Fleet#max_total_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity Ec2Ec2Fleet#min_target_capacity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone Ec2Ec2Fleet#single_availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.singleInstanceType">SingleInstanceType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type Ec2Ec2Fleet#single_instance_type}. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy Ec2Ec2Fleet#allocation_strategy}.

---

##### `CapacityReservationOptions`<sup>Optional</sup> <a name="CapacityReservationOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.capacityReservationOptions"></a>

```csharp
public Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions CapacityReservationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_reservation_options Ec2Ec2Fleet#capacity_reservation_options}.

---

##### `MaxTotalPrice`<sup>Optional</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.maxTotalPrice"></a>

```csharp
public string MaxTotalPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price Ec2Ec2Fleet#max_total_price}.

---

##### `MinTargetCapacity`<sup>Optional</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.minTargetCapacity"></a>

```csharp
public double MinTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity Ec2Ec2Fleet#min_target_capacity}.

---

##### `SingleAvailabilityZone`<sup>Optional</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.singleAvailabilityZone"></a>

```csharp
public bool|IResolvable SingleAvailabilityZone { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone Ec2Ec2Fleet#single_availability_zone}.

---

##### `SingleInstanceType`<sup>Optional</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions.property.singleInstanceType"></a>

```csharp
public bool|IResolvable SingleInstanceType { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type Ec2Ec2Fleet#single_instance_type}.

---

### Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions <a name="Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions {
    string UsageStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions.property.usageStrategy">UsageStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#usage_strategy Ec2Ec2Fleet#usage_strategy}. |

---

##### `UsageStrategy`<sup>Optional</sup> <a name="UsageStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions.property.usageStrategy"></a>

```csharp
public string UsageStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#usage_strategy Ec2Ec2Fleet#usage_strategy}.

---

### Ec2Ec2FleetReservedCapacityOptions <a name="Ec2Ec2FleetReservedCapacityOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetReservedCapacityOptions {
    string[] ReservationTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions.property.reservationTypes">ReservationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reservation_types Ec2Ec2Fleet#reservation_types}. |

---

##### `ReservationTypes`<sup>Optional</sup> <a name="ReservationTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions.property.reservationTypes"></a>

```csharp
public string[] ReservationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reservation_types Ec2Ec2Fleet#reservation_types}.

---

### Ec2Ec2FleetSpotOptions <a name="Ec2Ec2FleetSpotOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptions {
    string AllocationStrategy = null,
    string InstanceInterruptionBehavior = null,
    double InstancePoolsToUseCount = null,
    Ec2Ec2FleetSpotOptionsMaintenanceStrategies MaintenanceStrategies = null,
    string MaxTotalPrice = null,
    double MinTargetCapacity = null,
    bool|IResolvable SingleAvailabilityZone = null,
    bool|IResolvable SingleInstanceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy Ec2Ec2Fleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_interruption_behavior Ec2Ec2Fleet#instance_interruption_behavior}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_pools_to_use_count Ec2Ec2Fleet#instance_pools_to_use_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.maintenanceStrategies">MaintenanceStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#maintenance_strategies Ec2Ec2Fleet#maintenance_strategies}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price Ec2Ec2Fleet#max_total_price}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity Ec2Ec2Fleet#min_target_capacity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone Ec2Ec2Fleet#single_availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.singleInstanceType">SingleInstanceType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type Ec2Ec2Fleet#single_instance_type}. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy Ec2Ec2Fleet#allocation_strategy}.

---

##### `InstanceInterruptionBehavior`<sup>Optional</sup> <a name="InstanceInterruptionBehavior" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.instanceInterruptionBehavior"></a>

```csharp
public string InstanceInterruptionBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_interruption_behavior Ec2Ec2Fleet#instance_interruption_behavior}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_pools_to_use_count Ec2Ec2Fleet#instance_pools_to_use_count}.

---

##### `MaintenanceStrategies`<sup>Optional</sup> <a name="MaintenanceStrategies" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.maintenanceStrategies"></a>

```csharp
public Ec2Ec2FleetSpotOptionsMaintenanceStrategies MaintenanceStrategies { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#maintenance_strategies Ec2Ec2Fleet#maintenance_strategies}.

---

##### `MaxTotalPrice`<sup>Optional</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.maxTotalPrice"></a>

```csharp
public string MaxTotalPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price Ec2Ec2Fleet#max_total_price}.

---

##### `MinTargetCapacity`<sup>Optional</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.minTargetCapacity"></a>

```csharp
public double MinTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity Ec2Ec2Fleet#min_target_capacity}.

---

##### `SingleAvailabilityZone`<sup>Optional</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.singleAvailabilityZone"></a>

```csharp
public bool|IResolvable SingleAvailabilityZone { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone Ec2Ec2Fleet#single_availability_zone}.

---

##### `SingleInstanceType`<sup>Optional</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions.property.singleInstanceType"></a>

```csharp
public bool|IResolvable SingleInstanceType { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type Ec2Ec2Fleet#single_instance_type}.

---

### Ec2Ec2FleetSpotOptionsMaintenanceStrategies <a name="Ec2Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptionsMaintenanceStrategies {
    Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance CapacityRebalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_rebalance Ec2Ec2Fleet#capacity_rebalance}. |

---

##### `CapacityRebalance`<sup>Optional</sup> <a name="CapacityRebalance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance"></a>

```csharp
public Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance CapacityRebalance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_rebalance Ec2Ec2Fleet#capacity_rebalance}.

---

### Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    string ReplacementStrategy = null,
    double TerminationDelay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replacement_strategy Ec2Ec2Fleet#replacement_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.terminationDelay">TerminationDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#termination_delay Ec2Ec2Fleet#termination_delay}. |

---

##### `ReplacementStrategy`<sup>Optional</sup> <a name="ReplacementStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replacement_strategy Ec2Ec2Fleet#replacement_strategy}.

---

##### `TerminationDelay`<sup>Optional</sup> <a name="TerminationDelay" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.terminationDelay"></a>

```csharp
public double TerminationDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#termination_delay Ec2Ec2Fleet#termination_delay}.

---

### Ec2Ec2FleetTagSpecifications <a name="Ec2Ec2FleetTagSpecifications" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecifications {
    string ResourceType = null,
    IResolvable|Ec2Ec2FleetTagSpecificationsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#resource_type Ec2Ec2Fleet#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tags Ec2Ec2Fleet#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#resource_type Ec2Ec2Fleet#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications.property.tags"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecificationsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tags Ec2Ec2Fleet#tags}.

---

### Ec2Ec2FleetTagSpecificationsTags <a name="Ec2Ec2FleetTagSpecificationsTags" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecificationsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key Ec2Ec2Fleet#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#value Ec2Ec2Fleet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key Ec2Ec2Fleet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#value Ec2Ec2Fleet#value}.

---

### Ec2Ec2FleetTargetCapacitySpecification <a name="Ec2Ec2FleetTargetCapacitySpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTargetCapacitySpecification {
    double TotalTargetCapacity,
    string DefaultTargetCapacityType = null,
    double OnDemandTargetCapacity = null,
    double SpotTargetCapacity = null,
    string TargetCapacityUnitType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_target_capacity Ec2Ec2Fleet#total_target_capacity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType">DefaultTargetCapacityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#default_target_capacity_type Ec2Ec2Fleet#default_target_capacity_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_target_capacity Ec2Ec2Fleet#on_demand_target_capacity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity">SpotTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_target_capacity Ec2Ec2Fleet#spot_target_capacity}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_unit_type Ec2Ec2Fleet#target_capacity_unit_type}. |

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity"></a>

```csharp
public double TotalTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_target_capacity Ec2Ec2Fleet#total_target_capacity}.

---

##### `DefaultTargetCapacityType`<sup>Optional</sup> <a name="DefaultTargetCapacityType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType"></a>

```csharp
public string DefaultTargetCapacityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#default_target_capacity_type Ec2Ec2Fleet#default_target_capacity_type}.

---

##### `OnDemandTargetCapacity`<sup>Optional</sup> <a name="OnDemandTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity"></a>

```csharp
public double OnDemandTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_target_capacity Ec2Ec2Fleet#on_demand_target_capacity}.

---

##### `SpotTargetCapacity`<sup>Optional</sup> <a name="SpotTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity"></a>

```csharp
public double SpotTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_target_capacity Ec2Ec2Fleet#spot_target_capacity}.

---

##### `TargetCapacityUnitType`<sup>Optional</sup> <a name="TargetCapacityUnitType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType"></a>

```csharp
public string TargetCapacityUnitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_unit_type Ec2Ec2Fleet#target_capacity_unit_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateSpecificationUserData">ResetLaunchTemplateSpecificationUserData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetLaunchTemplateSpecificationUserData` <a name="ResetLaunchTemplateSpecificationUserData" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetLaunchTemplateSpecificationUserData"></a>

```csharp
private void ResetLaunchTemplateSpecificationUserData()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserDataInput">LaunchTemplateSpecificationUserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData">LaunchTemplateSpecificationUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateSpecificationUserDataInput`<sup>Optional</sup> <a name="LaunchTemplateSpecificationUserDataInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserDataInput"></a>

```csharp
public string LaunchTemplateSpecificationUserDataInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `LaunchTemplateSpecificationUserData`<sup>Required</sup> <a name="LaunchTemplateSpecificationUserData" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData"></a>

```csharp
public string LaunchTemplateSpecificationUserData { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsList <a name="Ec2Ec2FleetLaunchTemplateConfigsList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putLaunchTemplateSpecification">PutLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resetLaunchTemplateSpecification">ResetLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplateSpecification` <a name="PutLaunchTemplateSpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putLaunchTemplateSpecification"></a>

```csharp
private void PutLaunchTemplateSpecification(Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.putOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]

---

##### `ResetLaunchTemplateSpecification` <a name="ResetLaunchTemplateSpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resetLaunchTemplateSpecification"></a>

```csharp
private void ResetLaunchTemplateSpecification()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecificationInput">LaunchTemplateSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.overridesInput">OverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference LaunchTemplateSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesList</a>

---

##### `LaunchTemplateSpecificationInput`<sup>Optional</sup> <a name="LaunchTemplateSpecificationInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecificationInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification LaunchTemplateSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides[] OverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigs">Ec2Ec2FleetLaunchTemplateConfigs</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.putReferences">PutReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resetReferences">ResetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferences` <a name="PutReferences" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.putReferences"></a>

```csharp
private void PutReferences(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.putReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]

---

##### `ResetReferences` <a name="ResetReferences" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resetReferences"></a>

```csharp
private void ResetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">References</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.referencesInput">ReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList References { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.referencesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences[] ReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resetInstanceFamily">ResetInstanceFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceFamily` <a name="ResetInstanceFamily" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resetInstanceFamily"></a>

```csharp
private void ResetInstanceFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamilyInput">InstanceFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceFamilyInput`<sup>Optional</sup> <a name="InstanceFamilyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamilyInput"></a>

```csharp
public string InstanceFamilyInput { get; }
```

- *Type:* string

---

##### `InstanceFamily`<sup>Required</sup> <a name="InstanceFamily" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.putCpu">PutCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpu` <a name="PutCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.putCpu"></a>

```csharp
private void PutCpu(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.putCpu.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">Cpu</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpuInput">CpuInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference Cpu { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpuInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu CpuInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMiB">PutAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">PutBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselinePerformanceFactors">PutBaselinePerformanceFactors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryGiBPerVCpu">PutMemoryGiBPerVCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryMiB">PutMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkBandwidthGbps">PutNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount">PutNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb">PutTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putVCpuCount">PutVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers">ResetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorNames">ResetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMiB">ResetAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBareMetal">ResetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">ResetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBaselinePerformanceFactors">ResetBaselinePerformanceFactors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBurstablePerformance">ResetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetCpuManufacturers">ResetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetInstanceGenerations">ResetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetLocalStorage">ResetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes">ResetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice">ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMemoryGiBPerVCpu">ResetMemoryGiBPerVCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMemoryMiB">ResetMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetNetworkBandwidthGbps">ResetNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount">ResetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">ResetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetRequireEncryptionInTransit">ResetRequireEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport">ResetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">ResetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb">ResetTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetVCpuCount">ResetVCpuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```csharp
private void PutAcceleratorCount(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMiB` <a name="PutAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMiB"></a>

```csharp
private void PutAcceleratorTotalMemoryMiB(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMiB.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---

##### `PutBaselineEbsBandwidthMbps` <a name="PutBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```csharp
private void PutBaselineEbsBandwidthMbps(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `PutBaselinePerformanceFactors` <a name="PutBaselinePerformanceFactors" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselinePerformanceFactors"></a>

```csharp
private void PutBaselinePerformanceFactors(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putBaselinePerformanceFactors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---

##### `PutMemoryGiBPerVCpu` <a name="PutMemoryGiBPerVCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryGiBPerVCpu"></a>

```csharp
private void PutMemoryGiBPerVCpu(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryGiBPerVCpu.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---

##### `PutMemoryMiB` <a name="PutMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryMiB"></a>

```csharp
private void PutMemoryMiB(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putMemoryMiB.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

---

##### `PutNetworkBandwidthGbps` <a name="PutNetworkBandwidthGbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkBandwidthGbps"></a>

```csharp
private void PutNetworkBandwidthGbps(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkBandwidthGbps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `PutNetworkInterfaceCount` <a name="PutNetworkInterfaceCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```csharp
private void PutNetworkInterfaceCount(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `PutTotalLocalStorageGb` <a name="PutTotalLocalStorageGb" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```csharp
private void PutTotalLocalStorageGb(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `PutVCpuCount` <a name="PutVCpuCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putVCpuCount"></a>

```csharp
private void PutVCpuCount(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.putVCpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorManufacturers` <a name="ResetAcceleratorManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```csharp
private void ResetAcceleratorManufacturers()
```

##### `ResetAcceleratorNames` <a name="ResetAcceleratorNames" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```csharp
private void ResetAcceleratorNames()
```

##### `ResetAcceleratorTotalMemoryMiB` <a name="ResetAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMiB"></a>

```csharp
private void ResetAcceleratorTotalMemoryMiB()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```csharp
private void ResetAllowedInstanceTypes()
```

##### `ResetBareMetal` <a name="ResetBareMetal" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBareMetal"></a>

```csharp
private void ResetBareMetal()
```

##### `ResetBaselineEbsBandwidthMbps` <a name="ResetBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```csharp
private void ResetBaselineEbsBandwidthMbps()
```

##### `ResetBaselinePerformanceFactors` <a name="ResetBaselinePerformanceFactors" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBaselinePerformanceFactors"></a>

```csharp
private void ResetBaselinePerformanceFactors()
```

##### `ResetBurstablePerformance` <a name="ResetBurstablePerformance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```csharp
private void ResetBurstablePerformance()
```

##### `ResetCpuManufacturers` <a name="ResetCpuManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```csharp
private void ResetCpuManufacturers()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```

##### `ResetInstanceGenerations` <a name="ResetInstanceGenerations" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```csharp
private void ResetInstanceGenerations()
```

##### `ResetLocalStorage` <a name="ResetLocalStorage" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetLocalStorage"></a>

```csharp
private void ResetLocalStorage()
```

##### `ResetLocalStorageTypes` <a name="ResetLocalStorageTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```csharp
private void ResetLocalStorageTypes()
```

##### `ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice` <a name="ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
private void ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice()
```

##### `ResetMemoryGiBPerVCpu` <a name="ResetMemoryGiBPerVCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMemoryGiBPerVCpu"></a>

```csharp
private void ResetMemoryGiBPerVCpu()
```

##### `ResetMemoryMiB` <a name="ResetMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetMemoryMiB"></a>

```csharp
private void ResetMemoryMiB()
```

##### `ResetNetworkBandwidthGbps` <a name="ResetNetworkBandwidthGbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetNetworkBandwidthGbps"></a>

```csharp
private void ResetNetworkBandwidthGbps()
```

##### `ResetNetworkInterfaceCount` <a name="ResetNetworkInterfaceCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```csharp
private void ResetNetworkInterfaceCount()
```

##### `ResetOnDemandMaxPricePercentageOverLowestPrice` <a name="ResetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `ResetRequireEncryptionInTransit` <a name="ResetRequireEncryptionInTransit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetRequireEncryptionInTransit"></a>

```csharp
private void ResetRequireEncryptionInTransit()
```

##### `ResetRequireHibernateSupport` <a name="ResetRequireHibernateSupport" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```csharp
private void ResetRequireHibernateSupport()
```

##### `ResetSpotMaxPricePercentageOverLowestPrice` <a name="ResetSpotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetSpotMaxPricePercentageOverLowestPrice()
```

##### `ResetTotalLocalStorageGb` <a name="ResetTotalLocalStorageGb" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```csharp
private void ResetTotalLocalStorageGb()
```

##### `ResetVCpuCount` <a name="ResetVCpuCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resetVCpuCount"></a>

```csharp
private void ResetVCpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors">BaselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">MemoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">AcceleratorManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput">AcceleratorNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiBInput">AcceleratorTotalMemoryMiBInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetalInput">BareMetalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">BaselineEbsBandwidthMbpsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactorsInput">BaselinePerformanceFactorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput">BurstablePerformanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput">CpuManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput">InstanceGenerationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageInput">LocalStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput">LocalStorageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput">MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpuInput">MemoryGiBPerVCpuInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiBInput">MemoryMiBInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput">NetworkBandwidthGbpsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput">NetworkInterfaceCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">OnDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransitInput">RequireEncryptionInTransitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput">RequireHibernateSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">SpotMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">TotalLocalStorageGbInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCountInput">VCpuCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit">RequireEncryptionInTransit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference AcceleratorCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMiB`<sup>Required</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference AcceleratorTotalMemoryMiB { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference BaselineEbsBandwidthMbps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `BaselinePerformanceFactors`<sup>Required</sup> <a name="BaselinePerformanceFactors" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference BaselinePerformanceFactors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `MemoryGiBPerVCpu`<sup>Required</sup> <a name="MemoryGiBPerVCpu" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference MemoryGiBPerVCpu { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference MemoryMiB { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference NetworkBandwidthGbps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference NetworkInterfaceCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference TotalLocalStorageGb { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference VCpuCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount AcceleratorCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `AcceleratorManufacturersInput`<sup>Optional</sup> <a name="AcceleratorManufacturersInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```csharp
public string[] AcceleratorManufacturersInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorNamesInput`<sup>Optional</sup> <a name="AcceleratorNamesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```csharp
public string[] AcceleratorNamesInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorTotalMemoryMiBInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMiBInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiBInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiBInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```csharp
public string[] AllowedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `BareMetalInput`<sup>Optional</sup> <a name="BareMetalInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```csharp
public string BareMetalInput { get; }
```

- *Type:* string

---

##### `BaselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbpsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbpsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `BaselinePerformanceFactorsInput`<sup>Optional</sup> <a name="BaselinePerformanceFactorsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactorsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors BaselinePerformanceFactorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---

##### `BurstablePerformanceInput`<sup>Optional</sup> <a name="BurstablePerformanceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```csharp
public string BurstablePerformanceInput { get; }
```

- *Type:* string

---

##### `CpuManufacturersInput`<sup>Optional</sup> <a name="CpuManufacturersInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```csharp
public string[] CpuManufacturersInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `InstanceGenerationsInput`<sup>Optional</sup> <a name="InstanceGenerationsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```csharp
public string[] InstanceGenerationsInput { get; }
```

- *Type:* string[]

---

##### `LocalStorageInput`<sup>Optional</sup> <a name="LocalStorageInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageInput"></a>

```csharp
public string LocalStorageInput { get; }
```

- *Type:* string

---

##### `LocalStorageTypesInput`<sup>Optional</sup> <a name="LocalStorageTypesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```csharp
public string[] LocalStorageTypesInput { get; }
```

- *Type:* string[]

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput`<sup>Optional</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput { get; }
```

- *Type:* double

---

##### `MemoryGiBPerVCpuInput`<sup>Optional</sup> <a name="MemoryGiBPerVCpuInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpuInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu MemoryGiBPerVCpuInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---

##### `MemoryMiBInput`<sup>Optional</sup> <a name="MemoryMiBInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiBInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB MemoryMiBInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

---

##### `NetworkBandwidthGbpsInput`<sup>Optional</sup> <a name="NetworkBandwidthGbpsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbpsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `NetworkInterfaceCountInput`<sup>Optional</sup> <a name="NetworkInterfaceCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `OnDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `RequireEncryptionInTransitInput`<sup>Optional</sup> <a name="RequireEncryptionInTransitInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransitInput"></a>

```csharp
public bool|IResolvable RequireEncryptionInTransitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireHibernateSupportInput`<sup>Optional</sup> <a name="RequireHibernateSupportInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```csharp
public bool|IResolvable RequireHibernateSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `TotalLocalStorageGbInput`<sup>Optional</sup> <a name="TotalLocalStorageGbInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGbInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `VCpuCountInput`<sup>Optional</sup> <a name="VCpuCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCountInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount VCpuCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; }
```

- *Type:* string[]

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; }
```

- *Type:* string[]

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```csharp
public string BareMetal { get; }
```

- *Type:* string

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; }
```

- *Type:* string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; }
```

- *Type:* string[]

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```csharp
public string LocalStorage { get; }
```

- *Type:* string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; }
```

- *Type:* string[]

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice { get; }
```

- *Type:* double

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `RequireEncryptionInTransit`<sup>Required</sup> <a name="RequireEncryptionInTransit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit"></a>

```csharp
public bool|IResolvable RequireEncryptionInTransit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```csharp
public bool|IResolvable RequireHibernateSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```csharp
public string HttpEndpointInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putIpv6Addresses">PutIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putPrivateIpAddresses">PutPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetPrivateIpAddresses">ResetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount">ResetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv6Addresses` <a name="PutIpv6Addresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putIpv6Addresses"></a>

```csharp
private void PutIpv6Addresses(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putIpv6Addresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]

---

##### `PutPrivateIpAddresses` <a name="PutPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putPrivateIpAddresses"></a>

```csharp
private void PutPrivateIpAddresses(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.putPrivateIpAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```csharp
private void ResetDeviceIndex()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetInterfaceType"></a>

```csharp
private void ResetInterfaceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetNetworkCardIndex"></a>

```csharp
private void ResetNetworkCardIndex()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetPrivateIpAddresses` <a name="ResetPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetPrivateIpAddresses"></a>

```csharp
private void ResetPrivateIpAddresses()
```

##### `ResetSecondaryPrivateIpAddressCount` <a name="ResetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount"></a>

```csharp
private void ResetSecondaryPrivateIpAddressCount()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddressesInput">PrivateIpAddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput">SecondaryPrivateIpAddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType">InterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList Ipv6Addresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a>

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList PrivateIpAddresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public bool|IResolvable DeleteOnTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceTypeInput"></a>

```csharp
public string InterfaceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses[] Ipv6AddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>[]

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndexInput"></a>

```csharp
public double NetworkCardIndexInput { get; }
```

- *Type:* double

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpAddressesInput`<sup>Optional</sup> <a name="PrivateIpAddressesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddressesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses[] PrivateIpAddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `SecondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput"></a>

```csharp
public double SecondaryPrivateIpAddressCountInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```csharp
public bool|IResolvable AssociatePublicIpAddress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```csharp
public bool|IResolvable DeleteOnTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType"></a>

```csharp
public string InterfaceType { get; }
```

- *Type:* string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; }
```

- *Type:* double

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SecondaryPrivateIpAddressCount`<sup>Required</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get"></a>

```csharp
private Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>[]

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putIamInstanceProfile">PutIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetMaxPrice">ResetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]

---

##### `PutIamInstanceProfile` <a name="PutIamInstanceProfile" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putIamInstanceProfile"></a>

```csharp
private void PutIamInstanceProfile(Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putInstanceRequirements"></a>

```csharp
private void PutInstanceRequirements(Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putPlacement"></a>

```csharp
private void PutPlacement(Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetInstanceRequirements"></a>

```csharp
private void ResetInstanceRequirements()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetMaxPrice` <a name="ResetMaxPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetMaxPrice"></a>

```csharp
private void ResetMaxPrice()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetNetworkInterfaces"></a>

```csharp
private void ResetNetworkInterfaces()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resetWeightedCapacity"></a>

```csharp
private void ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPriceInput">MaxPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placementInput">PlacementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice">MaxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference IamInstanceProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement"></a>

```csharp
public Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a>

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappingsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings[] BlockDeviceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">Ec2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>[]

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfileInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile IamInstanceProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">Ec2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirementsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements InstanceRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">Ec2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `MaxPriceInput`<sup>Optional</sup> <a name="MaxPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPriceInput"></a>

```csharp
public string MaxPriceInput { get; }
```

- *Type:* string

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptionsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">Ec2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfacesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces[] NetworkInterfacesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">Ec2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>[]

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placementInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement PlacementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacityInput"></a>

```csharp
public double WeightedCapacityInput { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice"></a>

```csharp
public string MaxPrice { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity"></a>

```csharp
public double WeightedCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverrides">Ec2Ec2FleetLaunchTemplateConfigsOverrides</a>

---


### Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference <a name="Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetAffinity">ResetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetPartitionNumber">ResetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetSpreadDomain">ResetSpreadDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAffinity` <a name="ResetAffinity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetAffinity"></a>

```csharp
private void ResetAffinity()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetHostResourceGroupArn"></a>

```csharp
private void ResetHostResourceGroupArn()
```

##### `ResetPartitionNumber` <a name="ResetPartitionNumber" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetPartitionNumber"></a>

```csharp
private void ResetPartitionNumber()
```

##### `ResetSpreadDomain` <a name="ResetSpreadDomain" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetSpreadDomain"></a>

```csharp
private void ResetSpreadDomain()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resetTenancy"></a>

```csharp
private void ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinityInput">AffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumberInput">PartitionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomainInput">SpreadDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity">Affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain">SpreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AffinityInput`<sup>Optional</sup> <a name="AffinityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinityInput"></a>

```csharp
public string AffinityInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArnInput"></a>

```csharp
public string HostResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `PartitionNumberInput`<sup>Optional</sup> <a name="PartitionNumberInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumberInput"></a>

```csharp
public double PartitionNumberInput { get; }
```

- *Type:* double

---

##### `SpreadDomainInput`<sup>Optional</sup> <a name="SpreadDomainInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomainInput"></a>

```csharp
public string SpreadDomainInput { get; }
```

- *Type:* string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity"></a>

```csharp
public string Affinity { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; }
```

- *Type:* string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber"></a>

```csharp
public double PartitionNumber { get; }
```

- *Type:* double

---

##### `SpreadDomain`<sup>Required</sup> <a name="SpreadDomain" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain"></a>

```csharp
public string SpreadDomain { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement">Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

---


### Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference <a name="Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resetUsageStrategy">ResetUsageStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsageStrategy` <a name="ResetUsageStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resetUsageStrategy"></a>

```csharp
private void ResetUsageStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategyInput">UsageStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy">UsageStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsageStrategyInput`<sup>Optional</sup> <a name="UsageStrategyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategyInput"></a>

```csharp
public string UsageStrategyInput { get; }
```

- *Type:* string

---

##### `UsageStrategy`<sup>Required</sup> <a name="UsageStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy"></a>

```csharp
public string UsageStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

---


### Ec2Ec2FleetOnDemandOptionsOutputReference <a name="Ec2Ec2FleetOnDemandOptionsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetOnDemandOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.putCapacityReservationOptions">PutCapacityReservationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetCapacityReservationOptions">ResetCapacityReservationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetMaxTotalPrice">ResetMaxTotalPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetMinTargetCapacity">ResetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetSingleAvailabilityZone">ResetSingleAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetSingleInstanceType">ResetSingleInstanceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationOptions` <a name="PutCapacityReservationOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.putCapacityReservationOptions"></a>

```csharp
private void PutCapacityReservationOptions(Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.putCapacityReservationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetCapacityReservationOptions` <a name="ResetCapacityReservationOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetCapacityReservationOptions"></a>

```csharp
private void ResetCapacityReservationOptions()
```

##### `ResetMaxTotalPrice` <a name="ResetMaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetMaxTotalPrice"></a>

```csharp
private void ResetMaxTotalPrice()
```

##### `ResetMinTargetCapacity` <a name="ResetMinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetMinTargetCapacity"></a>

```csharp
private void ResetMinTargetCapacity()
```

##### `ResetSingleAvailabilityZone` <a name="ResetSingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetSingleAvailabilityZone"></a>

```csharp
private void ResetSingleAvailabilityZone()
```

##### `ResetSingleInstanceType` <a name="ResetSingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.resetSingleInstanceType"></a>

```csharp
private void ResetSingleInstanceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions">CapacityReservationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptionsInput">CapacityReservationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPriceInput">MaxTotalPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacityInput">MinTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZoneInput">SingleAvailabilityZoneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceTypeInput">SingleInstanceTypeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType">SingleInstanceType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationOptions`<sup>Required</sup> <a name="CapacityReservationOptions" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions"></a>

```csharp
public Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference CapacityReservationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `CapacityReservationOptionsInput`<sup>Optional</sup> <a name="CapacityReservationOptionsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptionsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions CapacityReservationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions">Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

---

##### `MaxTotalPriceInput`<sup>Optional</sup> <a name="MaxTotalPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPriceInput"></a>

```csharp
public string MaxTotalPriceInput { get; }
```

- *Type:* string

---

##### `MinTargetCapacityInput`<sup>Optional</sup> <a name="MinTargetCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacityInput"></a>

```csharp
public double MinTargetCapacityInput { get; }
```

- *Type:* double

---

##### `SingleAvailabilityZoneInput`<sup>Optional</sup> <a name="SingleAvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZoneInput"></a>

```csharp
public bool|IResolvable SingleAvailabilityZoneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SingleInstanceTypeInput`<sup>Optional</sup> <a name="SingleInstanceTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceTypeInput"></a>

```csharp
public bool|IResolvable SingleInstanceTypeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `MaxTotalPrice`<sup>Required</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice"></a>

```csharp
public string MaxTotalPrice { get; }
```

- *Type:* string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity"></a>

```csharp
public double MinTargetCapacity { get; }
```

- *Type:* double

---

##### `SingleAvailabilityZone`<sup>Required</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone"></a>

```csharp
public bool|IResolvable SingleAvailabilityZone { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SingleInstanceType`<sup>Required</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType"></a>

```csharp
public bool|IResolvable SingleInstanceType { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetOnDemandOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetOnDemandOptions">Ec2Ec2FleetOnDemandOptions</a>

---


### Ec2Ec2FleetReservedCapacityOptionsOutputReference <a name="Ec2Ec2FleetReservedCapacityOptionsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetReservedCapacityOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.resetReservationTypes">ResetReservationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReservationTypes` <a name="ResetReservationTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.resetReservationTypes"></a>

```csharp
private void ResetReservationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypesInput">ReservationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes">ReservationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationTypesInput`<sup>Optional</sup> <a name="ReservationTypesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypesInput"></a>

```csharp
public string[] ReservationTypesInput { get; }
```

- *Type:* string[]

---

##### `ReservationTypes`<sup>Required</sup> <a name="ReservationTypes" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes"></a>

```csharp
public string[] ReservationTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetReservedCapacityOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetReservedCapacityOptions">Ec2Ec2FleetReservedCapacityOptions</a>

---


### Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">ResetReplacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetTerminationDelay">ResetTerminationDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplacementStrategy` <a name="ResetReplacementStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```csharp
private void ResetReplacementStrategy()
```

##### `ResetTerminationDelay` <a name="ResetTerminationDelay" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetTerminationDelay"></a>

```csharp
private void ResetTerminationDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">ReplacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelayInput">TerminationDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay">TerminationDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplacementStrategyInput`<sup>Optional</sup> <a name="ReplacementStrategyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```csharp
public string ReplacementStrategyInput { get; }
```

- *Type:* string

---

##### `TerminationDelayInput`<sup>Optional</sup> <a name="TerminationDelayInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelayInput"></a>

```csharp
public double TerminationDelayInput { get; }
```

- *Type:* double

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; }
```

- *Type:* string

---

##### `TerminationDelay`<sup>Required</sup> <a name="TerminationDelay" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay"></a>

```csharp
public double TerminationDelay { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance">PutCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance">ResetCapacityRebalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityRebalance` <a name="PutCapacityRebalance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```csharp
private void PutCapacityRebalance(Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `ResetCapacityRebalance` <a name="ResetCapacityRebalance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```csharp
private void ResetCapacityRebalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">CapacityRebalanceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityRebalance`<sup>Required</sup> <a name="CapacityRebalance" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```csharp
public Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference CapacityRebalance { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `CapacityRebalanceInput`<sup>Optional</sup> <a name="CapacityRebalanceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance CapacityRebalanceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptionsMaintenanceStrategies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### Ec2Ec2FleetSpotOptionsOutputReference <a name="Ec2Ec2FleetSpotOptionsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetSpotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies">PutMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior">ResetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies">ResetMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMaxTotalPrice">ResetMaxTotalPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMinTargetCapacity">ResetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetSingleAvailabilityZone">ResetSingleAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetSingleInstanceType">ResetSingleInstanceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceStrategies` <a name="PutMaintenanceStrategies" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies"></a>

```csharp
private void PutMaintenanceStrategies(Ec2Ec2FleetSpotOptionsMaintenanceStrategies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetInstanceInterruptionBehavior` <a name="ResetInstanceInterruptionBehavior" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```csharp
private void ResetInstanceInterruptionBehavior()
```

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```

##### `ResetMaintenanceStrategies` <a name="ResetMaintenanceStrategies" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies"></a>

```csharp
private void ResetMaintenanceStrategies()
```

##### `ResetMaxTotalPrice` <a name="ResetMaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMaxTotalPrice"></a>

```csharp
private void ResetMaxTotalPrice()
```

##### `ResetMinTargetCapacity` <a name="ResetMinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetMinTargetCapacity"></a>

```csharp
private void ResetMinTargetCapacity()
```

##### `ResetSingleAvailabilityZone` <a name="ResetSingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetSingleAvailabilityZone"></a>

```csharp
private void ResetSingleAvailabilityZone()
```

##### `ResetSingleInstanceType` <a name="ResetSingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.resetSingleInstanceType"></a>

```csharp
private void ResetSingleInstanceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">MaintenanceStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">InstanceInterruptionBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput">MaintenanceStrategiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maxTotalPriceInput">MaxTotalPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacityInput">MinTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZoneInput">SingleAvailabilityZoneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleInstanceTypeInput">SingleInstanceTypeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType">SingleInstanceType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceStrategies`<sup>Required</sup> <a name="MaintenanceStrategies" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```csharp
public Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference MaintenanceStrategies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `InstanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviorInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```csharp
public string InstanceInterruptionBehaviorInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `MaintenanceStrategiesInput`<sup>Optional</sup> <a name="MaintenanceStrategiesInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptionsMaintenanceStrategies MaintenanceStrategiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsMaintenanceStrategies">Ec2Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `MaxTotalPriceInput`<sup>Optional</sup> <a name="MaxTotalPriceInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maxTotalPriceInput"></a>

```csharp
public string MaxTotalPriceInput { get; }
```

- *Type:* string

---

##### `MinTargetCapacityInput`<sup>Optional</sup> <a name="MinTargetCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacityInput"></a>

```csharp
public double MinTargetCapacityInput { get; }
```

- *Type:* double

---

##### `SingleAvailabilityZoneInput`<sup>Optional</sup> <a name="SingleAvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZoneInput"></a>

```csharp
public bool|IResolvable SingleAvailabilityZoneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SingleInstanceTypeInput`<sup>Optional</sup> <a name="SingleInstanceTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleInstanceTypeInput"></a>

```csharp
public bool|IResolvable SingleInstanceTypeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```csharp
public string InstanceInterruptionBehavior { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `MaxTotalPrice`<sup>Required</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice"></a>

```csharp
public string MaxTotalPrice { get; }
```

- *Type:* string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity"></a>

```csharp
public double MinTargetCapacity { get; }
```

- *Type:* double

---

##### `SingleAvailabilityZone`<sup>Required</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone"></a>

```csharp
public bool|IResolvable SingleAvailabilityZone { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SingleInstanceType`<sup>Required</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType"></a>

```csharp
public bool|IResolvable SingleInstanceType { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetSpotOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetSpotOptions">Ec2Ec2FleetSpotOptions</a>

---


### Ec2Ec2FleetTagSpecificationsList <a name="Ec2Ec2FleetTagSpecificationsList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.get"></a>

```csharp
private Ec2Ec2FleetTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>[]

---


### Ec2Ec2FleetTagSpecificationsOutputReference <a name="Ec2Ec2FleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2Ec2FleetTagSpecificationsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList">Ec2Ec2FleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.tags"></a>

```csharp
public Ec2Ec2FleetTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList">Ec2Ec2FleetTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecificationsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecifications">Ec2Ec2FleetTagSpecifications</a>

---


### Ec2Ec2FleetTagSpecificationsTagsList <a name="Ec2Ec2FleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.get"></a>

```csharp
private Ec2Ec2FleetTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecificationsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>[]

---


### Ec2Ec2FleetTagSpecificationsTagsOutputReference <a name="Ec2Ec2FleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetTagSpecificationsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTagSpecificationsTags">Ec2Ec2FleetTagSpecificationsTags</a>

---


### Ec2Ec2FleetTargetCapacitySpecificationOutputReference <a name="Ec2Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2Ec2FleetTargetCapacitySpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetDefaultTargetCapacityType">ResetDefaultTargetCapacityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity">ResetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity">ResetSpotTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType">ResetTargetCapacityUnitType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultTargetCapacityType` <a name="ResetDefaultTargetCapacityType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetDefaultTargetCapacityType"></a>

```csharp
private void ResetDefaultTargetCapacityType()
```

##### `ResetOnDemandTargetCapacity` <a name="ResetOnDemandTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity"></a>

```csharp
private void ResetOnDemandTargetCapacity()
```

##### `ResetSpotTargetCapacity` <a name="ResetSpotTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity"></a>

```csharp
private void ResetSpotTargetCapacity()
```

##### `ResetTargetCapacityUnitType` <a name="ResetTargetCapacityUnitType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType"></a>

```csharp
private void ResetTargetCapacityUnitType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput">DefaultTargetCapacityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput">OnDemandTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput">SpotTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput">TargetCapacityUnitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput">TotalTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">DefaultTargetCapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">SpotTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultTargetCapacityTypeInput`<sup>Optional</sup> <a name="DefaultTargetCapacityTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput"></a>

```csharp
public string DefaultTargetCapacityTypeInput { get; }
```

- *Type:* string

---

##### `OnDemandTargetCapacityInput`<sup>Optional</sup> <a name="OnDemandTargetCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput"></a>

```csharp
public double OnDemandTargetCapacityInput { get; }
```

- *Type:* double

---

##### `SpotTargetCapacityInput`<sup>Optional</sup> <a name="SpotTargetCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput"></a>

```csharp
public double SpotTargetCapacityInput { get; }
```

- *Type:* double

---

##### `TargetCapacityUnitTypeInput`<sup>Optional</sup> <a name="TargetCapacityUnitTypeInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput"></a>

```csharp
public string TargetCapacityUnitTypeInput { get; }
```

- *Type:* string

---

##### `TotalTargetCapacityInput`<sup>Optional</sup> <a name="TotalTargetCapacityInput" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput"></a>

```csharp
public double TotalTargetCapacityInput { get; }
```

- *Type:* double

---

##### `DefaultTargetCapacityType`<sup>Required</sup> <a name="DefaultTargetCapacityType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```csharp
public string DefaultTargetCapacityType { get; }
```

- *Type:* string

---

##### `OnDemandTargetCapacity`<sup>Required</sup> <a name="OnDemandTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```csharp
public double OnDemandTargetCapacity { get; }
```

- *Type:* double

---

##### `SpotTargetCapacity`<sup>Required</sup> <a name="SpotTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```csharp
public double SpotTargetCapacity { get; }
```

- *Type:* double

---

##### `TargetCapacityUnitType`<sup>Required</sup> <a name="TargetCapacityUnitType" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```csharp
public string TargetCapacityUnitType { get; }
```

- *Type:* string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```csharp
public double TotalTargetCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2Ec2FleetTargetCapacitySpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2Ec2Fleet.Ec2Ec2FleetTargetCapacitySpecification">Ec2Ec2FleetTargetCapacitySpecification</a>

---



