# `iotwirelessWirelessGateway` Submodule <a name="`iotwirelessWirelessGateway` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessGateway <a name="IotwirelessWirelessGateway" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway awscc_iotwireless_wireless_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGateway(Construct Scope, string Id, IotwirelessWirelessGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig">IotwirelessWirelessGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig">IotwirelessWirelessGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetLastUplinkReceivedAt">ResetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingArn">ResetThingArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingName">ResetThingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan"></a>

```csharp
private void PutLoRaWan(IotwirelessWirelessGatewayLoRaWan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessWirelessGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLastUplinkReceivedAt` <a name="ResetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetLastUplinkReceivedAt"></a>

```csharp
private void ResetLastUplinkReceivedAt()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThingArn` <a name="ResetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingArn"></a>

```csharp
private void ResetThingArn()
```

##### `ResetThingName` <a name="ResetThingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingName"></a>

```csharp
private void ResetThingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessWirelessGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessWirelessGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference">IotwirelessWirelessGatewayLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList">IotwirelessWirelessGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.wirelessGatewayId">WirelessGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAtInput">LastUplinkReceivedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWanInput">LoRaWanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArnInput">ThingArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingNameInput">ThingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArn">ThingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWan"></a>

```csharp
public IotwirelessWirelessGatewayLoRaWanOutputReference LoRaWan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference">IotwirelessWirelessGatewayLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tags"></a>

```csharp
public IotwirelessWirelessGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList">IotwirelessWirelessGatewayTagsList</a>

---

##### `WirelessGatewayId`<sup>Required</sup> <a name="WirelessGatewayId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.wirelessGatewayId"></a>

```csharp
public string WirelessGatewayId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LastUplinkReceivedAtInput`<sup>Optional</sup> <a name="LastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAtInput"></a>

```csharp
public string LastUplinkReceivedAtInput { get; }
```

- *Type:* string

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWanInput"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayLoRaWan LoRaWanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]

---

##### `ThingArnInput`<sup>Optional</sup> <a name="ThingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArnInput"></a>

```csharp
public string ThingArnInput { get; }
```

- *Type:* string

---

##### `ThingNameInput`<sup>Optional</sup> <a name="ThingNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingNameInput"></a>

```csharp
public string ThingNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUplinkReceivedAt`<sup>Required</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAt"></a>

```csharp
public string LastUplinkReceivedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArn"></a>

```csharp
public string ThingArn { get; }
```

- *Type:* string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessGatewayConfig <a name="IotwirelessWirelessGatewayConfig" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IotwirelessWirelessGatewayLoRaWan LoRaWan,
    string Description = null,
    string LastUplinkReceivedAt = null,
    string Name = null,
    IResolvable|IotwirelessWirelessGatewayTags[] Tags = null,
    string ThingArn = null,
    string ThingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.description">Description</a></code> | <code>string</code> | Description of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>string</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.name">Name</a></code> | <code>string</code> | Name of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]</code> | A list of key-value pairs that contain metadata for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingArn">ThingArn</a></code> | <code>string</code> | Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingName">ThingName</a></code> | <code>string</code> | Thing Name. If there is a Thing created, this can be returned with a Get call. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.loRaWan"></a>

```csharp
public IotwirelessWirelessGatewayLoRaWan LoRaWan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#lo_ra_wan IotwirelessWirelessGateway#lo_ra_wan}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#description IotwirelessWirelessGateway#description}

---

##### `LastUplinkReceivedAt`<sup>Optional</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lastUplinkReceivedAt"></a>

```csharp
public string LastUplinkReceivedAt { get; set; }
```

- *Type:* string

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#last_uplink_received_at IotwirelessWirelessGateway#last_uplink_received_at}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#name IotwirelessWirelessGateway#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#tags IotwirelessWirelessGateway#tags}

---

##### `ThingArn`<sup>Optional</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingArn"></a>

```csharp
public string ThingArn { get; set; }
```

- *Type:* string

Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#thing_arn IotwirelessWirelessGateway#thing_arn}

---

##### `ThingName`<sup>Optional</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingName"></a>

```csharp
public string ThingName { get; set; }
```

- *Type:* string

Thing Name. If there is a Thing created, this can be returned with a Get call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#thing_name IotwirelessWirelessGateway#thing_name}

---

### IotwirelessWirelessGatewayLoRaWan <a name="IotwirelessWirelessGatewayLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayLoRaWan {
    string GatewayEui,
    string RfRegion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.gatewayEui">GatewayEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#gateway_eui IotwirelessWirelessGateway#gateway_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.rfRegion">RfRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#rf_region IotwirelessWirelessGateway#rf_region}. |

---

##### `GatewayEui`<sup>Required</sup> <a name="GatewayEui" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.gatewayEui"></a>

```csharp
public string GatewayEui { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#gateway_eui IotwirelessWirelessGateway#gateway_eui}.

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.rfRegion"></a>

```csharp
public string RfRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#rf_region IotwirelessWirelessGateway#rf_region}.

---

### IotwirelessWirelessGatewayTags <a name="IotwirelessWirelessGatewayTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#key IotwirelessWirelessGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#value IotwirelessWirelessGateway#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#key IotwirelessWirelessGateway#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_gateway#value IotwirelessWirelessGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessGatewayLoRaWanOutputReference <a name="IotwirelessWirelessGatewayLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayLoRaWanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEuiInput">GatewayEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegionInput">RfRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui">GatewayEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion">RfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewayEuiInput`<sup>Optional</sup> <a name="GatewayEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEuiInput"></a>

```csharp
public string GatewayEuiInput { get; }
```

- *Type:* string

---

##### `RfRegionInput`<sup>Optional</sup> <a name="RfRegionInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegionInput"></a>

```csharp
public string RfRegionInput { get; }
```

- *Type:* string

---

##### `GatewayEui`<sup>Required</sup> <a name="GatewayEui" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui"></a>

```csharp
public string GatewayEui { get; }
```

- *Type:* string

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion"></a>

```csharp
public string RfRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayLoRaWan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---


### IotwirelessWirelessGatewayTagsList <a name="IotwirelessWirelessGatewayTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get"></a>

```csharp
private IotwirelessWirelessGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>[]

---


### IotwirelessWirelessGatewayTagsOutputReference <a name="IotwirelessWirelessGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>

---



