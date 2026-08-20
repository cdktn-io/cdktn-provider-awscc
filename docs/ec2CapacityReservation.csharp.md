# `ec2CapacityReservation` Submodule <a name="`ec2CapacityReservation` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservation <a name="Ec2CapacityReservation" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation awscc_ec2_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservation(Construct Scope, string Id, Ec2CapacityReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig">Ec2CapacityReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig">Ec2CapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType">ResetEndDateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria">ResetInstanceMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOutPostArn">ResetOutPostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn">ResetPlacementGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetUnusedReservationBillingOwnerId">ResetUnusedReservationBillingOwnerId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(IResolvable|Ec2CapacityReservationTagSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetEndDateType` <a name="ResetEndDateType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType"></a>

```csharp
private void ResetEndDateType()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetInstanceMatchCriteria` <a name="ResetInstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria"></a>

```csharp
private void ResetInstanceMatchCriteria()
```

##### `ResetOutPostArn` <a name="ResetOutPostArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOutPostArn"></a>

```csharp
private void ResetOutPostArn()
```

##### `ResetPlacementGroupArn` <a name="ResetPlacementGroupArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn"></a>

```csharp
private void ResetPlacementGroupArn()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetUnusedReservationBillingOwnerId` <a name="ResetUnusedReservationBillingOwnerId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetUnusedReservationBillingOwnerId"></a>

```csharp
private void ResetUnusedReservationBillingOwnerId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2CapacityReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2CapacityReservation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2CapacityReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2CapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availableInstanceCount">AvailableInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityAllocationSet">CapacityAllocationSet</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList">Ec2CapacityReservationCapacityAllocationSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationArn">CapacityReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationFleetId">CapacityReservationFleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference">Ec2CapacityReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.createDate">CreateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.deliveryPreference">DeliveryPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.reservationType">ReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList">Ec2CapacityReservationTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.totalInstanceCount">TotalInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput">EndDateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput">InstanceMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput">InstancePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArnInput">OutPostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput">PlacementGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerIdInput">UnusedReservationBillingOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType">EndDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage">EphemeralStorage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArn">OutPostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn">PlacementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerId">UnusedReservationBillingOwnerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailableInstanceCount`<sup>Required</sup> <a name="AvailableInstanceCount" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availableInstanceCount"></a>

```csharp
public double AvailableInstanceCount { get; }
```

- *Type:* double

---

##### `CapacityAllocationSet`<sup>Required</sup> <a name="CapacityAllocationSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityAllocationSet"></a>

```csharp
public Ec2CapacityReservationCapacityAllocationSetList CapacityAllocationSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList">Ec2CapacityReservationCapacityAllocationSetList</a>

---

##### `CapacityReservationArn`<sup>Required</sup> <a name="CapacityReservationArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationArn"></a>

```csharp
public string CapacityReservationArn { get; }
```

- *Type:* string

---

##### `CapacityReservationFleetId`<sup>Required</sup> <a name="CapacityReservationFleetId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationFleetId"></a>

```csharp
public string CapacityReservationFleetId { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `CommitmentInfo`<sup>Required</sup> <a name="CommitmentInfo" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.commitmentInfo"></a>

```csharp
public Ec2CapacityReservationCommitmentInfoOutputReference CommitmentInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference">Ec2CapacityReservationCommitmentInfoOutputReference</a>

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.createDate"></a>

```csharp
public string CreateDate { get; }
```

- *Type:* string

---

##### `DeliveryPreference`<sup>Required</sup> <a name="DeliveryPreference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.deliveryPreference"></a>

```csharp
public string DeliveryPreference { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `ReservationType`<sup>Required</sup> <a name="ReservationType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.reservationType"></a>

```csharp
public string ReservationType { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecifications"></a>

```csharp
public Ec2CapacityReservationTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList">Ec2CapacityReservationTagSpecificationsList</a>

---

##### `TotalInstanceCount`<sup>Required</sup> <a name="TotalInstanceCount" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.totalInstanceCount"></a>

```csharp
public double TotalInstanceCount { get; }
```

- *Type:* double

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput"></a>

```csharp
public bool|IResolvable EbsOptimizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndDateTypeInput`<sup>Optional</sup> <a name="EndDateTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput"></a>

```csharp
public string EndDateTypeInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput"></a>

```csharp
public bool|IResolvable EphemeralStorageInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceMatchCriteriaInput`<sup>Optional</sup> <a name="InstanceMatchCriteriaInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput"></a>

```csharp
public string InstanceMatchCriteriaInput { get; }
```

- *Type:* string

---

##### `InstancePlatformInput`<sup>Optional</sup> <a name="InstancePlatformInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput"></a>

```csharp
public string InstancePlatformInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `OutPostArnInput`<sup>Optional</sup> <a name="OutPostArnInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArnInput"></a>

```csharp
public string OutPostArnInput { get; }
```

- *Type:* string

---

##### `PlacementGroupArnInput`<sup>Optional</sup> <a name="PlacementGroupArnInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput"></a>

```csharp
public string PlacementGroupArnInput { get; }
```

- *Type:* string

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecificationsInput"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecifications[] TagSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `UnusedReservationBillingOwnerIdInput`<sup>Optional</sup> <a name="UnusedReservationBillingOwnerIdInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerIdInput"></a>

```csharp
public string UnusedReservationBillingOwnerIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndDateType`<sup>Required</sup> <a name="EndDateType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType"></a>

```csharp
public string EndDateType { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage"></a>

```csharp
public bool|IResolvable EphemeralStorage { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; }
```

- *Type:* string

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `OutPostArn`<sup>Required</sup> <a name="OutPostArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArn"></a>

```csharp
public string OutPostArn { get; }
```

- *Type:* string

---

##### `PlacementGroupArn`<sup>Required</sup> <a name="PlacementGroupArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn"></a>

```csharp
public string PlacementGroupArn { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UnusedReservationBillingOwnerId`<sup>Required</sup> <a name="UnusedReservationBillingOwnerId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerId"></a>

```csharp
public string UnusedReservationBillingOwnerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationCapacityAllocationSet <a name="Ec2CapacityReservationCapacityAllocationSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationCapacityAllocationSet {

};
```


### Ec2CapacityReservationCommitmentInfo <a name="Ec2CapacityReservationCommitmentInfo" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationCommitmentInfo {

};
```


### Ec2CapacityReservationConfig <a name="Ec2CapacityReservationConfig" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double InstanceCount,
    string InstancePlatform,
    string InstanceType,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    bool|IResolvable EbsOptimized = null,
    string EndDate = null,
    string EndDateType = null,
    bool|IResolvable EphemeralStorage = null,
    string InstanceMatchCriteria = null,
    string OutPostArn = null,
    string PlacementGroupArn = null,
    IResolvable|Ec2CapacityReservationTagSpecifications[] TagSpecifications = null,
    string Tenancy = null,
    string UnusedReservationBillingOwnerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType">EndDateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outPostArn">OutPostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn">PlacementGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.unusedReservationBillingOwnerId">UnusedReservationBillingOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}.

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}.

---

##### `EndDateType`<sup>Optional</sup> <a name="EndDateType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType"></a>

```csharp
public string EndDateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}.

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage"></a>

```csharp
public bool|IResolvable EphemeralStorage { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}.

---

##### `InstanceMatchCriteria`<sup>Optional</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}.

---

##### `OutPostArn`<sup>Optional</sup> <a name="OutPostArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outPostArn"></a>

```csharp
public string OutPostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}.

---

##### `PlacementGroupArn`<sup>Optional</sup> <a name="PlacementGroupArn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn"></a>

```csharp
public string PlacementGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagSpecifications"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecifications[] TagSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}.

---

##### `UnusedReservationBillingOwnerId`<sup>Optional</sup> <a name="UnusedReservationBillingOwnerId" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.unusedReservationBillingOwnerId"></a>

```csharp
public string UnusedReservationBillingOwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}.

---

### Ec2CapacityReservationTagSpecifications <a name="Ec2CapacityReservationTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecifications {
    string ResourceType = null,
    IResolvable|Ec2CapacityReservationTagSpecificationsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#resource_type Ec2CapacityReservation#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#resource_type Ec2CapacityReservation#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.tags"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecificationsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}.

---

### Ec2CapacityReservationTagSpecificationsTags <a name="Ec2CapacityReservationTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecificationsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#key Ec2CapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#value Ec2CapacityReservation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#key Ec2CapacityReservation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_capacity_reservation#value Ec2CapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationCapacityAllocationSetList <a name="Ec2CapacityReservationCapacityAllocationSetList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationCapacityAllocationSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get"></a>

```csharp
private Ec2CapacityReservationCapacityAllocationSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Ec2CapacityReservationCapacityAllocationSetOutputReference <a name="Ec2CapacityReservationCapacityAllocationSetOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationCapacityAllocationSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType">AllocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet">Ec2CapacityReservationCapacityAllocationSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationType`<sup>Required</sup> <a name="AllocationType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType"></a>

```csharp
public string AllocationType { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue"></a>

```csharp
public Ec2CapacityReservationCapacityAllocationSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet">Ec2CapacityReservationCapacityAllocationSet</a>

---


### Ec2CapacityReservationCommitmentInfoOutputReference <a name="Ec2CapacityReservationCommitmentInfoOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationCommitmentInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate">CommitmentEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount">CommittedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo">Ec2CapacityReservationCommitmentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentEndDate`<sup>Required</sup> <a name="CommitmentEndDate" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```csharp
public string CommitmentEndDate { get; }
```

- *Type:* string

---

##### `CommittedInstanceCount`<sup>Required</sup> <a name="CommittedInstanceCount" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```csharp
public double CommittedInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.internalValue"></a>

```csharp
public Ec2CapacityReservationCommitmentInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo">Ec2CapacityReservationCommitmentInfo</a>

---


### Ec2CapacityReservationTagSpecificationsList <a name="Ec2CapacityReservationTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get"></a>

```csharp
private Ec2CapacityReservationTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>[]

---


### Ec2CapacityReservationTagSpecificationsOutputReference <a name="Ec2CapacityReservationTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2CapacityReservationTagSpecificationsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList">Ec2CapacityReservationTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tags"></a>

```csharp
public Ec2CapacityReservationTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList">Ec2CapacityReservationTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecificationsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>

---


### Ec2CapacityReservationTagSpecificationsTagsList <a name="Ec2CapacityReservationTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get"></a>

```csharp
private Ec2CapacityReservationTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecificationsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>[]

---


### Ec2CapacityReservationTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2CapacityReservationTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2CapacityReservationTagSpecificationsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>

---



