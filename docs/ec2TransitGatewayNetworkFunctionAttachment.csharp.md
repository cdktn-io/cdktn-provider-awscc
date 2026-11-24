# `ec2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`ec2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayNetworkFunctionAttachment <a name="Ec2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayNetworkFunctionAttachment(Construct Scope, string Id, Ec2TransitGatewayNetworkFunctionAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds">ResetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---

##### `ResetAvailabilityZoneIds` <a name="ResetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds"></a>

```csharp
private void ResetAvailabilityZoneIds()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayNetworkFunctionAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayNetworkFunctionAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayNetworkFunctionAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayNetworkFunctionAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayNetworkFunctionAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput">AvailabilityZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```csharp
public Ec2TransitGatewayNetworkFunctionAttachmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIdsInput`<sup>Optional</sup> <a name="AvailabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput"></a>

```csharp
public string[] AvailabilityZoneIdsInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput"></a>

```csharp
public IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIds`<sup>Required</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```csharp
public string[] AvailabilityZoneIds { get; }
```

- *Type:* string[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentConfig <a name="Ec2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayNetworkFunctionAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TransitGatewayId,
    string[] AvailabilityZoneIds = null,
    string[] AvailabilityZones = null,
    string ServiceName = null,
    IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>string[]</code> | The Availability Zone IDs for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | The Availability Zones for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the network function service. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | The tags for the attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#transit_gateway_id Ec2TransitGatewayNetworkFunctionAttachment#transit_gateway_id}

---

##### `AvailabilityZoneIds`<sup>Optional</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds"></a>

```csharp
public string[] AvailabilityZoneIds { get; set; }
```

- *Type:* string[]

The Availability Zone IDs for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zone_ids Ec2TransitGatewayNetworkFunctionAttachment#availability_zone_ids}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

The Availability Zones for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zones Ec2TransitGatewayNetworkFunctionAttachment#availability_zones}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the network function service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#service_name Ec2TransitGatewayNetworkFunctionAttachment#service_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags"></a>

```csharp
public IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

The tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#tags Ec2TransitGatewayNetworkFunctionAttachment#tags}

---

### Ec2TransitGatewayNetworkFunctionAttachmentTags <a name="Ec2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayNetworkFunctionAttachmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#key Ec2TransitGatewayNetworkFunctionAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#value Ec2TransitGatewayNetworkFunctionAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentTagsList <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayNetworkFunctionAttachmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```csharp
private Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---


### Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>

---



