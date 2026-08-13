# `ec2NatGateway` Submodule <a name="`ec2NatGateway` Submodule" id="@cdktn/provider-awscc.ec2NatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NatGateway <a name="Ec2NatGateway" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGateway(Construct Scope, string Id, Ec2NatGatewayConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig">Ec2NatGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig">Ec2NatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses">PutAvailabilityZoneAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId">ResetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode">ResetAvailabilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses">ResetAvailabilityZoneAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType">ResetConnectivityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds">ResetMaxDrainDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds">ResetSecondaryAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount">ResetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses">ResetSecondaryPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAvailabilityZoneAddresses` <a name="PutAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses"></a>

```csharp
private void PutAvailabilityZoneAddresses(IResolvable|Ec2NatGatewayAvailabilityZoneAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2NatGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---

##### `ResetAllocationId` <a name="ResetAllocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId"></a>

```csharp
private void ResetAllocationId()
```

##### `ResetAvailabilityMode` <a name="ResetAvailabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode"></a>

```csharp
private void ResetAvailabilityMode()
```

##### `ResetAvailabilityZoneAddresses` <a name="ResetAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses"></a>

```csharp
private void ResetAvailabilityZoneAddresses()
```

##### `ResetConnectivityType` <a name="ResetConnectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType"></a>

```csharp
private void ResetConnectivityType()
```

##### `ResetMaxDrainDurationSeconds` <a name="ResetMaxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds"></a>

```csharp
private void ResetMaxDrainDurationSeconds()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetSecondaryAllocationIds` <a name="ResetSecondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds"></a>

```csharp
private void ResetSecondaryAllocationIds()
```

##### `ResetSecondaryPrivateIpAddressCount` <a name="ResetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount"></a>

```csharp
private void ResetSecondaryPrivateIpAddressCount()
```

##### `ResetSecondaryPrivateIpAddresses` <a name="ResetSecondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses"></a>

```csharp
private void ResetSecondaryPrivateIpAddresses()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NatGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NatGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NatGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NatGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NatGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones">AutoProvisionZones</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps">AutoScalingIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses">AvailabilityZoneAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId">EniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId">RouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput">AllocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput">AvailabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput">AvailabilityZoneAddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput">ConnectivityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput">MaxDrainDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput">SecondaryAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput">SecondaryPrivateIpAddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput">SecondaryPrivateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId">AllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode">AvailabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType">ConnectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds">MaxDrainDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds">SecondaryAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses">SecondaryPrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoProvisionZones`<sup>Required</sup> <a name="AutoProvisionZones" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones"></a>

```csharp
public string AutoProvisionZones { get; }
```

- *Type:* string

---

##### `AutoScalingIps`<sup>Required</sup> <a name="AutoScalingIps" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps"></a>

```csharp
public string AutoScalingIps { get; }
```

- *Type:* string

---

##### `AvailabilityZoneAddresses`<sup>Required</sup> <a name="AvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses"></a>

```csharp
public Ec2NatGatewayAvailabilityZoneAddressesList AvailabilityZoneAddresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a>

---

##### `EniId`<sup>Required</sup> <a name="EniId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId"></a>

```csharp
public string EniId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NatGatewayId`<sup>Required</sup> <a name="NatGatewayId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; }
```

- *Type:* string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId"></a>

```csharp
public string RouteTableId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags"></a>

```csharp
public Ec2NatGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a>

---

##### `AllocationIdInput`<sup>Optional</sup> <a name="AllocationIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput"></a>

```csharp
public string AllocationIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityModeInput`<sup>Optional</sup> <a name="AvailabilityModeInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput"></a>

```csharp
public string AvailabilityModeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneAddressesInput`<sup>Optional</sup> <a name="AvailabilityZoneAddressesInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput"></a>

```csharp
public IResolvable|Ec2NatGatewayAvailabilityZoneAddresses[] AvailabilityZoneAddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---

##### `ConnectivityTypeInput`<sup>Optional</sup> <a name="ConnectivityTypeInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput"></a>

```csharp
public string ConnectivityTypeInput { get; }
```

- *Type:* string

---

##### `MaxDrainDurationSecondsInput`<sup>Optional</sup> <a name="MaxDrainDurationSecondsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput"></a>

```csharp
public double MaxDrainDurationSecondsInput { get; }
```

- *Type:* double

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `SecondaryAllocationIdsInput`<sup>Optional</sup> <a name="SecondaryAllocationIdsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput"></a>

```csharp
public string[] SecondaryAllocationIdsInput { get; }
```

- *Type:* string[]

---

##### `SecondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput"></a>

```csharp
public double SecondaryPrivateIpAddressCountInput { get; }
```

- *Type:* double

---

##### `SecondaryPrivateIpAddressesInput`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressesInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput"></a>

```csharp
public string[] SecondaryPrivateIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput"></a>

```csharp
public IResolvable|Ec2NatGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AllocationId`<sup>Required</sup> <a name="AllocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId"></a>

```csharp
public string AllocationId { get; }
```

- *Type:* string

---

##### `AvailabilityMode`<sup>Required</sup> <a name="AvailabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode"></a>

```csharp
public string AvailabilityMode { get; }
```

- *Type:* string

---

##### `ConnectivityType`<sup>Required</sup> <a name="ConnectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType"></a>

```csharp
public string ConnectivityType { get; }
```

- *Type:* string

---

##### `MaxDrainDurationSeconds`<sup>Required</sup> <a name="MaxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds"></a>

```csharp
public double MaxDrainDurationSeconds { get; }
```

- *Type:* double

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SecondaryAllocationIds`<sup>Required</sup> <a name="SecondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds"></a>

```csharp
public string[] SecondaryAllocationIds { get; }
```

- *Type:* string[]

---

##### `SecondaryPrivateIpAddressCount`<sup>Required</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; }
```

- *Type:* double

---

##### `SecondaryPrivateIpAddresses`<sup>Required</sup> <a name="SecondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses"></a>

```csharp
public string[] SecondaryPrivateIpAddresses { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NatGatewayAvailabilityZoneAddresses <a name="Ec2NatGatewayAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayAvailabilityZoneAddresses {
    string[] AllocationIds = null,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds">AllocationIds</a></code> | <code>string[]</code> | The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. |

---

##### `AllocationIds`<sup>Optional</sup> <a name="AllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds"></a>

```csharp
public string[] AllocationIds { get; set; }
```

- *Type:* string[]

The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#allocation_ids Ec2NatGateway#allocation_ids}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#availability_zone Ec2NatGateway#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across AWS Regions.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#availability_zone_id Ec2NatGateway#availability_zone_id}

---

### Ec2NatGatewayConfig <a name="Ec2NatGatewayConfig" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AllocationId = null,
    string AvailabilityMode = null,
    IResolvable|Ec2NatGatewayAvailabilityZoneAddresses[] AvailabilityZoneAddresses = null,
    string ConnectivityType = null,
    double MaxDrainDurationSeconds = null,
    string PrivateIpAddress = null,
    string[] SecondaryAllocationIds = null,
    double SecondaryPrivateIpAddressCount = null,
    string[] SecondaryPrivateIpAddresses = null,
    string SubnetId = null,
    IResolvable|Ec2NatGatewayTags[] Tags = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId">AllocationId</a></code> | <code>string</code> | [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode">AvailabilityMode</a></code> | <code>string</code> | Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses">AvailabilityZoneAddresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType">ConnectivityType</a></code> | <code>string</code> | Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds">MaxDrainDurationSeconds</a></code> | <code>double</code> | The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | The private IPv4 address to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds">SecondaryAllocationIds</a></code> | <code>string[]</code> | Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>double</code> | [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses">SecondaryPrivateIpAddresses</a></code> | <code>string[]</code> | Secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet in which the NAT gateway is located. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | The tags for the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the VPC in which the NAT gateway is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocationId`<sup>Optional</sup> <a name="AllocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId"></a>

```csharp
public string AllocationId { get; set; }
```

- *Type:* string

[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.

This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#allocation_id Ec2NatGateway#allocation_id}

---

##### `AvailabilityMode`<sup>Optional</sup> <a name="AvailabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode"></a>

```csharp
public string AvailabilityMode { get; set; }
```

- *Type:* string

Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.

A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#availability_mode Ec2NatGateway#availability_mode}

---

##### `AvailabilityZoneAddresses`<sup>Optional</sup> <a name="AvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses"></a>

```csharp
public IResolvable|Ec2NatGatewayAvailabilityZoneAddresses[] AvailabilityZoneAddresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ.

The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#availability_zone_addresses Ec2NatGateway#availability_zone_addresses}

---

##### `ConnectivityType`<sup>Optional</sup> <a name="ConnectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType"></a>

```csharp
public string ConnectivityType { get; set; }
```

- *Type:* string

Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#connectivity_type Ec2NatGateway#connectivity_type}

---

##### `MaxDrainDurationSeconds`<sup>Optional</sup> <a name="MaxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds"></a>

```csharp
public double MaxDrainDurationSeconds { get; set; }
```

- *Type:* double

The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress.

Default value is 350 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds Ec2NatGateway#max_drain_duration_seconds}

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

The private IPv4 address to assign to the NAT gateway.

If you don't provide an address, a private IPv4 address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#private_ip_address Ec2NatGateway#private_ip_address}

---

##### `SecondaryAllocationIds`<sup>Optional</sup> <a name="SecondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds"></a>

```csharp
public string[] SecondaryAllocationIds { get; set; }
```

- *Type:* string[]

Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids Ec2NatGateway#secondary_allocation_ids}

---

##### `SecondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount"></a>

```csharp
public double SecondaryPrivateIpAddressCount { get; set; }
```

- *Type:* double

[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count Ec2NatGateway#secondary_private_ip_address_count}

---

##### `SecondaryPrivateIpAddresses`<sup>Optional</sup> <a name="SecondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses"></a>

```csharp
public string[] SecondaryPrivateIpAddresses { get; set; }
```

- *Type:* string[]

Secondary private IPv4 addresses.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses Ec2NatGateway#secondary_private_ip_addresses}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#subnet_id Ec2NatGateway#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags"></a>

```csharp
public IResolvable|Ec2NatGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

The tags for the NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#tags Ec2NatGateway#tags}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the VPC in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#vpc_id Ec2NatGateway#vpc_id}

---

### Ec2NatGatewayTags <a name="Ec2NatGatewayTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#key Ec2NatGateway#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_nat_gateway#value Ec2NatGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NatGatewayAvailabilityZoneAddressesList <a name="Ec2NatGatewayAvailabilityZoneAddressesList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayAvailabilityZoneAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get"></a>

```csharp
private Ec2NatGatewayAvailabilityZoneAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2NatGatewayAvailabilityZoneAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---


### Ec2NatGatewayAvailabilityZoneAddressesOutputReference <a name="Ec2NatGatewayAvailabilityZoneAddressesOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayAvailabilityZoneAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds">ResetAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationIds` <a name="ResetAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds"></a>

```csharp
private void ResetAllocationIds()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput">AllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds">AllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationIdsInput`<sup>Optional</sup> <a name="AllocationIdsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput"></a>

```csharp
public string[] AllocationIdsInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `AllocationIds`<sup>Required</sup> <a name="AllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds"></a>

```csharp
public string[] AllocationIds { get; }
```

- *Type:* string[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2NatGatewayAvailabilityZoneAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>

---


### Ec2NatGatewayTagsList <a name="Ec2NatGatewayTagsList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get"></a>

```csharp
private Ec2NatGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2NatGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---


### Ec2NatGatewayTagsOutputReference <a name="Ec2NatGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NatGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2NatGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>

---



