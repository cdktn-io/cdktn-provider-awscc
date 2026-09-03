# `ec2CapacityReservationFleet` Submodule <a name="`ec2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservationFleet <a name="Ec2CapacityReservationFleet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleet(Construct Scope, string Id, Ec2CapacityReservationFleetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig">Ec2CapacityReservationFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig">Ec2CapacityReservationFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications">PutInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria">ResetInstanceMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications">ResetInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate">ResetNoRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate">ResetRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity">ResetTotalTargetCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceTypeSpecifications` <a name="PutInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications"></a>

```csharp
private void PutInstanceTypeSpecifications(IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(IResolvable|Ec2CapacityReservationFleetTagSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetInstanceMatchCriteria` <a name="ResetInstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria"></a>

```csharp
private void ResetInstanceMatchCriteria()
```

##### `ResetInstanceTypeSpecifications` <a name="ResetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications"></a>

```csharp
private void ResetInstanceTypeSpecifications()
```

##### `ResetNoRemoveEndDate` <a name="ResetNoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate"></a>

```csharp
private void ResetNoRemoveEndDate()
```

##### `ResetRemoveEndDate` <a name="ResetRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate"></a>

```csharp
private void ResetRemoveEndDate()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetTotalTargetCapacity` <a name="ResetTotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity"></a>

```csharp
private void ResetTotalTargetCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservationFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservationFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservationFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservationFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2CapacityReservationFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId">CapacityReservationFleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications">InstanceTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput">InstanceMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput">InstanceTypeSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput">NoRemoveEndDateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput">RemoveEndDateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput">TotalTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate">NoRemoveEndDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate">RemoveEndDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityReservationFleetId`<sup>Required</sup> <a name="CapacityReservationFleetId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```csharp
public string CapacityReservationFleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceTypeSpecifications`<sup>Required</sup> <a name="InstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```csharp
public Ec2CapacityReservationFleetInstanceTypeSpecificationsList InstanceTypeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications"></a>

```csharp
public Ec2CapacityReservationFleetTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `InstanceMatchCriteriaInput`<sup>Optional</sup> <a name="InstanceMatchCriteriaInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput"></a>

```csharp
public string InstanceMatchCriteriaInput { get; }
```

- *Type:* string

---

##### `InstanceTypeSpecificationsInput`<sup>Optional</sup> <a name="InstanceTypeSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications[] InstanceTypeSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]

---

##### `NoRemoveEndDateInput`<sup>Optional</sup> <a name="NoRemoveEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput"></a>

```csharp
public bool|IResolvable NoRemoveEndDateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemoveEndDateInput`<sup>Optional</sup> <a name="RemoveEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput"></a>

```csharp
public bool|IResolvable RemoveEndDateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecifications[] TagSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `TotalTargetCapacityInput`<sup>Optional</sup> <a name="TotalTargetCapacityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput"></a>

```csharp
public double TotalTargetCapacityInput { get; }
```

- *Type:* double

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; }
```

- *Type:* string

---

##### `NoRemoveEndDate`<sup>Required</sup> <a name="NoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate"></a>

```csharp
public bool|IResolvable NoRemoveEndDate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemoveEndDate`<sup>Required</sup> <a name="RemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate"></a>

```csharp
public bool|IResolvable RemoveEndDate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity"></a>

```csharp
public double TotalTargetCapacity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationFleetConfig <a name="Ec2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AllocationStrategy = null,
    string EndDate = null,
    string InstanceMatchCriteria = null,
    IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications[] InstanceTypeSpecifications = null,
    bool|IResolvable NoRemoveEndDate = null,
    bool|IResolvable RemoveEndDate = null,
    IResolvable|Ec2CapacityReservationFleetTagSpecifications[] TagSpecifications = null,
    string Tenancy = null,
    double TotalTargetCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications">InstanceTypeSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate">NoRemoveEndDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate">RemoveEndDate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `InstanceMatchCriteria`<sup>Optional</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `InstanceTypeSpecifications`<sup>Optional</sup> <a name="InstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications[] InstanceTypeSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `NoRemoveEndDate`<sup>Optional</sup> <a name="NoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate"></a>

```csharp
public bool|IResolvable NoRemoveEndDate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `RemoveEndDate`<sup>Optional</sup> <a name="RemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate"></a>

```csharp
public bool|IResolvable RemoveEndDate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecifications[] TagSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `TotalTargetCapacity`<sup>Optional</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity"></a>

```csharp
public double TotalTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

### Ec2CapacityReservationFleetInstanceTypeSpecifications <a name="Ec2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetInstanceTypeSpecifications {
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    bool|IResolvable EbsOptimized = null,
    string InstancePlatform = null,
    string InstanceType = null,
    double Priority = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}.

---

##### `InstancePlatform`<sup>Optional</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}.

---

### Ec2CapacityReservationFleetTagSpecifications <a name="Ec2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecifications {
    string ResourceType = null,
    IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}.

---

### Ec2CapacityReservationFleetTagSpecificationsTags <a name="Ec2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecificationsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationFleetInstanceTypeSpecificationsList <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetInstanceTypeSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```csharp
private Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>[]

---


### Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform">ResetInstancePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetInstancePlatform` <a name="ResetInstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform"></a>

```csharp
private void ResetInstancePlatform()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput">InstancePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput"></a>

```csharp
public bool|IResolvable EbsOptimizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstancePlatformInput`<sup>Optional</sup> <a name="InstancePlatformInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput"></a>

```csharp
public string InstancePlatformInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsList <a name="Ec2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get"></a>

```csharp
private Ec2CapacityReservationFleetTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>[]

---


### Ec2CapacityReservationFleetTagSpecificationsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```csharp
public Ec2CapacityReservationFleetTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsTagsList <a name="Ec2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```csharp
private Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>[]

---


### Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>

---



