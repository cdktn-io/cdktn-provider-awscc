# `iotwirelessWirelessDevice` Submodule <a name="`iotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDevice <a name="IotwirelessWirelessDevice" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDevice(Construct Scope, string Id, IotwirelessWirelessDeviceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt">ResetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan">ResetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning">ResetPositioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn">ResetThingArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan"></a>

```csharp
private void PutLoRaWan(IotwirelessWirelessDeviceLoRaWan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessWirelessDeviceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLastUplinkReceivedAt` <a name="ResetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt"></a>

```csharp
private void ResetLastUplinkReceivedAt()
```

##### `ResetLoRaWan` <a name="ResetLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan"></a>

```csharp
private void ResetLoRaWan()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPositioning` <a name="ResetPositioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning"></a>

```csharp
private void ResetPositioning()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThingArn` <a name="ResetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn"></a>

```csharp
private void ResetThingArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDevice.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDevice.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDevice.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDevice.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessWirelessDevice to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId">WirelessDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput">DestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput">LastUplinkReceivedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput">LoRaWanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput">PositioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput">ThingArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName">DestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning">Positioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn">ThingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanOutputReference LoRaWan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags"></a>

```csharp
public IotwirelessWirelessDeviceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a>

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

##### `WirelessDeviceId`<sup>Required</sup> <a name="WirelessDeviceId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```csharp
public string WirelessDeviceId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput"></a>

```csharp
public string DestinationNameInput { get; }
```

- *Type:* string

---

##### `LastUplinkReceivedAtInput`<sup>Optional</sup> <a name="LastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput"></a>

```csharp
public string LastUplinkReceivedAtInput { get; }
```

- *Type:* string

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWan LoRaWanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PositioningInput`<sup>Optional</sup> <a name="PositioningInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput"></a>

```csharp
public string PositioningInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---

##### `ThingArnInput`<sup>Optional</sup> <a name="ThingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput"></a>

```csharp
public string ThingArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName"></a>

```csharp
public string DestinationName { get; }
```

- *Type:* string

---

##### `LastUplinkReceivedAt`<sup>Required</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```csharp
public string LastUplinkReceivedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Positioning`<sup>Required</sup> <a name="Positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning"></a>

```csharp
public string Positioning { get; }
```

- *Type:* string

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn"></a>

```csharp
public string ThingArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceConfig <a name="IotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationName,
    string Type,
    string Description = null,
    string LastUplinkReceivedAt = null,
    IotwirelessWirelessDeviceLoRaWan LoRaWan = null,
    string Name = null,
    string Positioning = null,
    IResolvable|IotwirelessWirelessDeviceTags[] Tags = null,
    string ThingArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName">DestinationName</a></code> | <code>string</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type">Type</a></code> | <code>string</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description">Description</a></code> | <code>string</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>string</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name">Name</a></code> | <code>string</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning">Positioning</a></code> | <code>string</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn">ThingArn</a></code> | <code>string</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName"></a>

```csharp
public string DestinationName { get; set; }
```

- *Type:* string

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `LastUplinkReceivedAt`<sup>Optional</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt"></a>

```csharp
public string LastUplinkReceivedAt { get; set; }
```

- *Type:* string

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `LoRaWan`<sup>Optional</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWan LoRaWan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `Positioning`<sup>Optional</sup> <a name="Positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning"></a>

```csharp
public string Positioning { get; set; }
```

- *Type:* string

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `ThingArn`<sup>Optional</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn"></a>

```csharp
public string ThingArn { get; set; }
```

- *Type:* string

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

### IotwirelessWirelessDeviceLoRaWan <a name="IotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWan {
    IotwirelessWirelessDeviceLoRaWanAbpV10X AbpV10X = null,
    IotwirelessWirelessDeviceLoRaWanAbpV11 AbpV11 = null,
    string DevEui = null,
    string DeviceProfileId = null,
    IotwirelessWirelessDeviceLoRaWanFPorts FPorts = null,
    IotwirelessWirelessDeviceLoRaWanOtaaV10X OtaaV10X = null,
    IotwirelessWirelessDeviceLoRaWanOtaaV11 OtaaV11 = null,
    string ServiceProfileId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X">AbpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11">AbpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui">DevEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId">DeviceProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts">FPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X">OtaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11">OtaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId">ServiceProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}. |

---

##### `AbpV10X`<sup>Optional</sup> <a name="AbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV10X AbpV10X { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

##### `AbpV11`<sup>Optional</sup> <a name="AbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV11 AbpV11 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

##### `DevEui`<sup>Optional</sup> <a name="DevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui"></a>

```csharp
public string DevEui { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

##### `DeviceProfileId`<sup>Optional</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId"></a>

```csharp
public string DeviceProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

##### `FPorts`<sup>Optional</sup> <a name="FPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanFPorts FPorts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

##### `OtaaV10X`<sup>Optional</sup> <a name="OtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanOtaaV10X OtaaV10X { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

##### `OtaaV11`<sup>Optional</sup> <a name="OtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanOtaaV11 OtaaV11 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

##### `ServiceProfileId`<sup>Optional</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId"></a>

```csharp
public string ServiceProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10X <a name="IotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV10X {
    string DevAddr = null,
    IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys SessionKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr">DevAddr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `DevAddr`<sup>Optional</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr"></a>

```csharp
public string DevAddr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `SessionKeys`<sup>Optional</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys SessionKeys { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys {
    string AppSKey = null,
    string NwkSKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey">AppSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey">NwkSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}. |

---

##### `AppSKey`<sup>Optional</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey"></a>

```csharp
public string AppSKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `NwkSKey`<sup>Optional</sup> <a name="NwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey"></a>

```csharp
public string NwkSKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11 <a name="IotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV11 {
    string DevAddr = null,
    IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys SessionKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr">DevAddr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `DevAddr`<sup>Optional</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr"></a>

```csharp
public string DevAddr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `SessionKeys`<sup>Optional</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys SessionKeys { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys {
    string AppSKey = null,
    string FNwkSIntKey = null,
    string NwkSEncKey = null,
    string SNwkSIntKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey">AppSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey">FNwkSIntKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey">NwkSEncKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey">SNwkSIntKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}. |

---

##### `AppSKey`<sup>Optional</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey"></a>

```csharp
public string AppSKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `FNwkSIntKey`<sup>Optional</sup> <a name="FNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey"></a>

```csharp
public string FNwkSIntKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

##### `NwkSEncKey`<sup>Optional</sup> <a name="NwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey"></a>

```csharp
public string NwkSEncKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

##### `SNwkSIntKey`<sup>Optional</sup> <a name="SNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey"></a>

```csharp
public string SNwkSIntKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

### IotwirelessWirelessDeviceLoRaWanFPorts <a name="IotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanFPorts {
    IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications[] Applications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications">Applications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | A list of optional LoRaWAN application information, which can be used for geolocation. |

---

##### `Applications`<sup>Optional</sup> <a name="Applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications[] Applications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

### IotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanFPortsApplications {
    string DestinationName = null,
    double FPort = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName">DestinationName</a></code> | <code>string</code> | The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort">FPort</a></code> | <code>double</code> | The Fport value. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type">Type</a></code> | <code>string</code> | Application type, which can be specified to obtain real-time position information of your LoRaWAN device. |

---

##### `DestinationName`<sup>Optional</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName"></a>

```csharp
public string DestinationName { get; set; }
```

- *Type:* string

The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `FPort`<sup>Optional</sup> <a name="FPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort"></a>

```csharp
public double FPort { get; set; }
```

- *Type:* double

The Fport value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#f_port IotwirelessWirelessDevice#f_port}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

### IotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanOtaaV10X {
    string AppEui = null,
    string AppKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui">AppEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey">AppKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |

---

##### `AppEui`<sup>Optional</sup> <a name="AppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui"></a>

```csharp
public string AppEui { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey"></a>

```csharp
public string AppKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

### IotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanOtaaV11 {
    string AppKey = null,
    string JoinEui = null,
    string NwkKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey">AppKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui">JoinEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey">NwkKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}. |

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey"></a>

```csharp
public string AppKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `JoinEui`<sup>Optional</sup> <a name="JoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui"></a>

```csharp
public string JoinEui { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

##### `NwkKey`<sup>Optional</sup> <a name="NwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey"></a>

```csharp
public string NwkKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

### IotwirelessWirelessDeviceTags <a name="IotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys">PutSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr">ResetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys">ResetSessionKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionKeys` <a name="PutSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys"></a>

```csharp
private void PutSessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `ResetDevAddr` <a name="ResetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr"></a>

```csharp
private void ResetDevAddr()
```

##### `ResetSessionKeys` <a name="ResetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys"></a>

```csharp
private void ResetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput">DevAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput">SessionKeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">DevAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference SessionKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `DevAddrInput`<sup>Optional</sup> <a name="DevAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput"></a>

```csharp
public string DevAddrInput { get; }
```

- *Type:* string

---

##### `SessionKeysInput`<sup>Optional</sup> <a name="SessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys SessionKeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```csharp
public string DevAddr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10X InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey">ResetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey">ResetNwkSKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSKey` <a name="ResetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey"></a>

```csharp
private void ResetAppSKey()
```

##### `ResetNwkSKey` <a name="ResetNwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey"></a>

```csharp
private void ResetNwkSKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput">AppSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput">NwkSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">NwkSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSKeyInput`<sup>Optional</sup> <a name="AppSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput"></a>

```csharp
public string AppSKeyInput { get; }
```

- *Type:* string

---

##### `NwkSKeyInput`<sup>Optional</sup> <a name="NwkSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput"></a>

```csharp
public string NwkSKeyInput { get; }
```

- *Type:* string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```csharp
public string AppSKey { get; }
```

- *Type:* string

---

##### `NwkSKey`<sup>Required</sup> <a name="NwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```csharp
public string NwkSKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys">PutSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr">ResetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys">ResetSessionKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionKeys` <a name="PutSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys"></a>

```csharp
private void PutSessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `ResetDevAddr` <a name="ResetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr"></a>

```csharp
private void ResetDevAddr()
```

##### `ResetSessionKeys` <a name="ResetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys"></a>

```csharp
private void ResetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput">DevAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput">SessionKeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">DevAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference SessionKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `DevAddrInput`<sup>Optional</sup> <a name="DevAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput"></a>

```csharp
public string DevAddrInput { get; }
```

- *Type:* string

---

##### `SessionKeysInput`<sup>Optional</sup> <a name="SessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys SessionKeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```csharp
public string DevAddr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey">ResetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey">ResetFNwkSIntKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey">ResetNwkSEncKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey">ResetSNwkSIntKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSKey` <a name="ResetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey"></a>

```csharp
private void ResetAppSKey()
```

##### `ResetFNwkSIntKey` <a name="ResetFNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey"></a>

```csharp
private void ResetFNwkSIntKey()
```

##### `ResetNwkSEncKey` <a name="ResetNwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey"></a>

```csharp
private void ResetNwkSEncKey()
```

##### `ResetSNwkSIntKey` <a name="ResetSNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey"></a>

```csharp
private void ResetSNwkSIntKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput">AppSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput">FNwkSIntKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput">NwkSEncKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput">SNwkSIntKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">FNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">NwkSEncKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">SNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSKeyInput`<sup>Optional</sup> <a name="AppSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput"></a>

```csharp
public string AppSKeyInput { get; }
```

- *Type:* string

---

##### `FNwkSIntKeyInput`<sup>Optional</sup> <a name="FNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput"></a>

```csharp
public string FNwkSIntKeyInput { get; }
```

- *Type:* string

---

##### `NwkSEncKeyInput`<sup>Optional</sup> <a name="NwkSEncKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput"></a>

```csharp
public string NwkSEncKeyInput { get; }
```

- *Type:* string

---

##### `SNwkSIntKeyInput`<sup>Optional</sup> <a name="SNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput"></a>

```csharp
public string SNwkSIntKeyInput { get; }
```

- *Type:* string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```csharp
public string AppSKey { get; }
```

- *Type:* string

---

##### `FNwkSIntKey`<sup>Required</sup> <a name="FNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```csharp
public string FNwkSIntKey { get; }
```

- *Type:* string

---

##### `NwkSEncKey`<sup>Required</sup> <a name="NwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```csharp
public string NwkSEncKey { get; }
```

- *Type:* string

---

##### `SNwkSIntKey`<sup>Required</sup> <a name="SNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```csharp
public string SNwkSIntKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```csharp
private IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName">ResetDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort">ResetFPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationName` <a name="ResetDestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName"></a>

```csharp
private void ResetDestinationName()
```

##### `ResetFPort` <a name="ResetFPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort"></a>

```csharp
private void ResetFPort()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput">DestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput">FPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">DestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">FPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput"></a>

```csharp
public string DestinationNameInput { get; }
```

- *Type:* string

---

##### `FPortInput`<sup>Optional</sup> <a name="FPortInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput"></a>

```csharp
public double FPortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```csharp
public string DestinationName { get; }
```

- *Type:* string

---

##### `FPort`<sup>Required</sup> <a name="FPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```csharp
public double FPort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanFPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications">PutApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications">ResetApplications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplications` <a name="PutApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications"></a>

```csharp
private void PutApplications(IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---

##### `ResetApplications` <a name="ResetApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications"></a>

```csharp
private void ResetApplications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput">ApplicationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList Applications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications[] ApplicationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui">ResetAppEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey">ResetAppKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppEui` <a name="ResetAppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui"></a>

```csharp
private void ResetAppEui()
```

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey"></a>

```csharp
private void ResetAppKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput">AppEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">AppEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">AppKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppEuiInput`<sup>Optional</sup> <a name="AppEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput"></a>

```csharp
public string AppEuiInput { get; }
```

- *Type:* string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput"></a>

```csharp
public string AppKeyInput { get; }
```

- *Type:* string

---

##### `AppEui`<sup>Required</sup> <a name="AppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```csharp
public string AppEui { get; }
```

- *Type:* string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```csharp
public string AppKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV10X InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui">ResetJoinEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey">ResetNwkKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey"></a>

```csharp
private void ResetAppKey()
```

##### `ResetJoinEui` <a name="ResetJoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui"></a>

```csharp
private void ResetJoinEui()
```

##### `ResetNwkKey` <a name="ResetNwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey"></a>

```csharp
private void ResetNwkKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput">JoinEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput">NwkKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">AppKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">JoinEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">NwkKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput"></a>

```csharp
public string AppKeyInput { get; }
```

- *Type:* string

---

##### `JoinEuiInput`<sup>Optional</sup> <a name="JoinEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput"></a>

```csharp
public string JoinEuiInput { get; }
```

- *Type:* string

---

##### `NwkKeyInput`<sup>Optional</sup> <a name="NwkKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput"></a>

```csharp
public string NwkKeyInput { get; }
```

- *Type:* string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```csharp
public string AppKey { get; }
```

- *Type:* string

---

##### `JoinEui`<sup>Required</sup> <a name="JoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```csharp
public string JoinEui { get; }
```

- *Type:* string

---

##### `NwkKey`<sup>Required</sup> <a name="NwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```csharp
public string NwkKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV11 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### IotwirelessWirelessDeviceLoRaWanOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceLoRaWanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X">PutAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11">PutAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts">PutFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X">PutOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11">PutOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X">ResetAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11">ResetAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui">ResetDevEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId">ResetDeviceProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts">ResetFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X">ResetOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11">ResetOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId">ResetServiceProfileId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbpV10X` <a name="PutAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X"></a>

```csharp
private void PutAbpV10X(IotwirelessWirelessDeviceLoRaWanAbpV10X Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `PutAbpV11` <a name="PutAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11"></a>

```csharp
private void PutAbpV11(IotwirelessWirelessDeviceLoRaWanAbpV11 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `PutFPorts` <a name="PutFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts"></a>

```csharp
private void PutFPorts(IotwirelessWirelessDeviceLoRaWanFPorts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `PutOtaaV10X` <a name="PutOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X"></a>

```csharp
private void PutOtaaV10X(IotwirelessWirelessDeviceLoRaWanOtaaV10X Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `PutOtaaV11` <a name="PutOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11"></a>

```csharp
private void PutOtaaV11(IotwirelessWirelessDeviceLoRaWanOtaaV11 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `ResetAbpV10X` <a name="ResetAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X"></a>

```csharp
private void ResetAbpV10X()
```

##### `ResetAbpV11` <a name="ResetAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11"></a>

```csharp
private void ResetAbpV11()
```

##### `ResetDevEui` <a name="ResetDevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui"></a>

```csharp
private void ResetDevEui()
```

##### `ResetDeviceProfileId` <a name="ResetDeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId"></a>

```csharp
private void ResetDeviceProfileId()
```

##### `ResetFPorts` <a name="ResetFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts"></a>

```csharp
private void ResetFPorts()
```

##### `ResetOtaaV10X` <a name="ResetOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X"></a>

```csharp
private void ResetOtaaV10X()
```

##### `ResetOtaaV11` <a name="ResetOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11"></a>

```csharp
private void ResetOtaaV11()
```

##### `ResetServiceProfileId` <a name="ResetServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId"></a>

```csharp
private void ResetServiceProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">AbpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">AbpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">FPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">OtaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">OtaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput">AbpV10XInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input">AbpV11Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput">DevEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput">DeviceProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput">FPortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput">OtaaV10XInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input">OtaaV11Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput">ServiceProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">DevEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">DeviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">ServiceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbpV10X`<sup>Required</sup> <a name="AbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference AbpV10X { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `AbpV11`<sup>Required</sup> <a name="AbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference AbpV11 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `FPorts`<sup>Required</sup> <a name="FPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanFPortsOutputReference FPorts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `OtaaV10X`<sup>Required</sup> <a name="OtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference OtaaV10X { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `OtaaV11`<sup>Required</sup> <a name="OtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```csharp
public IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference OtaaV11 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `AbpV10XInput`<sup>Optional</sup> <a name="AbpV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10X AbpV10XInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `AbpV11Input`<sup>Optional</sup> <a name="AbpV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11 AbpV11Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `DevEuiInput`<sup>Optional</sup> <a name="DevEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput"></a>

```csharp
public string DevEuiInput { get; }
```

- *Type:* string

---

##### `DeviceProfileIdInput`<sup>Optional</sup> <a name="DeviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput"></a>

```csharp
public string DeviceProfileIdInput { get; }
```

- *Type:* string

---

##### `FPortsInput`<sup>Optional</sup> <a name="FPortsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPorts FPortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `OtaaV10XInput`<sup>Optional</sup> <a name="OtaaV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV10X OtaaV10XInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `OtaaV11Input`<sup>Optional</sup> <a name="OtaaV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV11 OtaaV11Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `ServiceProfileIdInput`<sup>Optional</sup> <a name="ServiceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput"></a>

```csharp
public string ServiceProfileIdInput { get; }
```

- *Type:* string

---

##### `DevEui`<sup>Required</sup> <a name="DevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```csharp
public string DevEui { get; }
```

- *Type:* string

---

##### `DeviceProfileId`<sup>Required</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```csharp
public string DeviceProfileId { get; }
```

- *Type:* string

---

##### `ServiceProfileId`<sup>Required</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```csharp
public string ServiceProfileId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceLoRaWan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---


### IotwirelessWirelessDeviceTagsList <a name="IotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get"></a>

```csharp
private IotwirelessWirelessDeviceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---


### IotwirelessWirelessDeviceTagsOutputReference <a name="IotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>

---



