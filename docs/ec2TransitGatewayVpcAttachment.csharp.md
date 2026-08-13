# `ec2TransitGatewayVpcAttachment` Submodule <a name="`ec2TransitGatewayVpcAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachment <a name="Ec2TransitGatewayVpcAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment awscc_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachment(Construct Scope, string Id, Ec2TransitGatewayVpcAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetAddSubnetIds">ResetAddSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRemoveSubnetIds">ResetRemoveSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions"></a>

```csharp
private void PutOptions(Ec2TransitGatewayVpcAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2TransitGatewayVpcAttachmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---

##### `ResetAddSubnetIds` <a name="ResetAddSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetAddSubnetIds"></a>

```csharp
private void ResetAddSubnetIds()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetRemoveSubnetIds` <a name="ResetRemoveSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRemoveSubnetIds"></a>

```csharp
private void ResetRemoveSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayVpcAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayVpcAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayVpcAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayVpcAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayVpcAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference">Ec2TransitGatewayVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList">Ec2TransitGatewayVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId">TransitGatewayVpcAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIdsInput">AddSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIdsInput">RemoveSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIds">AddSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIds">RemoveSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.options"></a>

```csharp
public Ec2TransitGatewayVpcAttachmentOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference">Ec2TransitGatewayVpcAttachmentOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags"></a>

```csharp
public Ec2TransitGatewayVpcAttachmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList">Ec2TransitGatewayVpcAttachmentTagsList</a>

---

##### `TransitGatewayVpcAttachmentId`<sup>Required</sup> <a name="TransitGatewayVpcAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId"></a>

```csharp
public string TransitGatewayVpcAttachmentId { get; }
```

- *Type:* string

---

##### `AddSubnetIdsInput`<sup>Optional</sup> <a name="AddSubnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIdsInput"></a>

```csharp
public string[] AddSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.optionsInput"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---

##### `RemoveSubnetIdsInput`<sup>Optional</sup> <a name="RemoveSubnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIdsInput"></a>

```csharp
public string[] RemoveSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AddSubnetIds`<sup>Required</sup> <a name="AddSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIds"></a>

```csharp
public string[] AddSubnetIds { get; }
```

- *Type:* string[]

---

##### `RemoveSubnetIds`<sup>Required</sup> <a name="RemoveSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIds"></a>

```csharp
public string[] RemoveSubnetIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentConfig <a name="Ec2TransitGatewayVpcAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] SubnetIds,
    string TransitGatewayId,
    string VpcId,
    string[] AddSubnetIds = null,
    Ec2TransitGatewayVpcAttachmentOptions Options = null,
    string[] RemoveSubnetIds = null,
    IResolvable|Ec2TransitGatewayVpcAttachmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.addSubnetIds">AddSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | The options for the transit gateway vpc attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.removeSubnetIds">RemoveSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}.

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}.

---

##### `AddSubnetIds`<sup>Optional</sup> <a name="AddSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.addSubnetIds"></a>

```csharp
public string[] AddSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.options"></a>

```csharp
public Ec2TransitGatewayVpcAttachmentOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

The options for the transit gateway vpc attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#options Ec2TransitGatewayVpcAttachment#options}

---

##### `RemoveSubnetIds`<sup>Optional</sup> <a name="RemoveSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.removeSubnetIds"></a>

```csharp
public string[] RemoveSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}.

---

### Ec2TransitGatewayVpcAttachmentOptions <a name="Ec2TransitGatewayVpcAttachmentOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentOptions {
    string ApplianceModeSupport = null,
    string DnsSupport = null,
    string Ipv6Support = null,
    string SecurityGroupReferencingSupport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.dnsSupport">DnsSupport</a></code> | <code>string</code> | Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.ipv6Support">Ipv6Support</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>string</code> | Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable \| disable. |

---

##### `ApplianceModeSupport`<sup>Optional</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.applianceModeSupport"></a>

```csharp
public string ApplianceModeSupport { get; set; }
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}

---

##### `DnsSupport`<sup>Optional</sup> <a name="DnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.dnsSupport"></a>

```csharp
public string DnsSupport { get; set; }
```

- *Type:* string

Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}

---

##### `Ipv6Support`<sup>Optional</sup> <a name="Ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.ipv6Support"></a>

```csharp
public string Ipv6Support { get; set; }
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#ipv_6_support Ec2TransitGatewayVpcAttachment#ipv_6_support}

---

##### `SecurityGroupReferencingSupport`<sup>Optional</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```csharp
public string SecurityGroupReferencingSupport { get; set; }
```

- *Type:* string

Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#security_group_referencing_support Ec2TransitGatewayVpcAttachment#security_group_referencing_support}

---

### Ec2TransitGatewayVpcAttachmentTags <a name="Ec2TransitGatewayVpcAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#key Ec2TransitGatewayVpcAttachment#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#value Ec2TransitGatewayVpcAttachment#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#key Ec2TransitGatewayVpcAttachment#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_vpc_attachment#value Ec2TransitGatewayVpcAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayVpcAttachmentOptionsOutputReference <a name="Ec2TransitGatewayVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">ResetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetDnsSupport">ResetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetIpv6Support">ResetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">ResetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplianceModeSupport` <a name="ResetApplianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```csharp
private void ResetApplianceModeSupport()
```

##### `ResetDnsSupport` <a name="ResetDnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```csharp
private void ResetDnsSupport()
```

##### `ResetIpv6Support` <a name="ResetIpv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```csharp
private void ResetIpv6Support()
```

##### `ResetSecurityGroupReferencingSupport` <a name="ResetSecurityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```csharp
private void ResetSecurityGroupReferencingSupport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">ApplianceModeSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupportInput">DnsSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">Ipv6SupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">SecurityGroupReferencingSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport">DnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support">Ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplianceModeSupportInput`<sup>Optional</sup> <a name="ApplianceModeSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```csharp
public string ApplianceModeSupportInput { get; }
```

- *Type:* string

---

##### `DnsSupportInput`<sup>Optional</sup> <a name="DnsSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```csharp
public string DnsSupportInput { get; }
```

- *Type:* string

---

##### `Ipv6SupportInput`<sup>Optional</sup> <a name="Ipv6SupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```csharp
public string Ipv6SupportInput { get; }
```

- *Type:* string

---

##### `SecurityGroupReferencingSupportInput`<sup>Optional</sup> <a name="SecurityGroupReferencingSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```csharp
public string SecurityGroupReferencingSupportInput { get; }
```

- *Type:* string

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```csharp
public string ApplianceModeSupport { get; }
```

- *Type:* string

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```csharp
public string DnsSupport { get; }
```

- *Type:* string

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```csharp
public string Ipv6Support { get; }
```

- *Type:* string

---

##### `SecurityGroupReferencingSupport`<sup>Required</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```csharp
public string SecurityGroupReferencingSupport { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---


### Ec2TransitGatewayVpcAttachmentTagsList <a name="Ec2TransitGatewayVpcAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get"></a>

```csharp
private Ec2TransitGatewayVpcAttachmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---


### Ec2TransitGatewayVpcAttachmentTagsOutputReference <a name="Ec2TransitGatewayVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayVpcAttachmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayVpcAttachmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>

---



