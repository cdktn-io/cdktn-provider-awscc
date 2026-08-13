# `iotwirelessDeviceProfile` Submodule <a name="`iotwirelessDeviceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessDeviceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessDeviceProfile <a name="IotwirelessDeviceProfile" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfile(Construct Scope, string Id, IotwirelessDeviceProfileConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan">ResetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan"></a>

```csharp
private void PutLoRaWan(IotwirelessDeviceProfileLoRaWan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessDeviceProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---

##### `ResetLoRaWan` <a name="ResetLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan"></a>

```csharp
private void ResetLoRaWan()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessDeviceProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessDeviceProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessDeviceProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessDeviceProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessDeviceProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessDeviceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessDeviceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId">DeviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput">LoRaWanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeviceProfileId`<sup>Required</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId"></a>

```csharp
public string DeviceProfileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan"></a>

```csharp
public IotwirelessDeviceProfileLoRaWanOutputReference LoRaWan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags"></a>

```csharp
public IotwirelessDeviceProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a>

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileLoRaWan LoRaWanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessDeviceProfileConfig <a name="IotwirelessDeviceProfileConfig" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IotwirelessDeviceProfileLoRaWan LoRaWan = null,
    string Name = null,
    IResolvable|IotwirelessDeviceProfileTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name">Name</a></code> | <code>string</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | A list of key-value pairs that contain metadata for the device profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LoRaWan`<sup>Optional</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan"></a>

```csharp
public IotwirelessDeviceProfileLoRaWan LoRaWan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#name IotwirelessDeviceProfile#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

A list of key-value pairs that contain metadata for the device profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#tags IotwirelessDeviceProfile#tags}

---

### IotwirelessDeviceProfileLoRaWan <a name="IotwirelessDeviceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileLoRaWan {
    double ClassBTimeout = null,
    double ClassCTimeout = null,
    double[] FactoryPresetFreqsList = null,
    string MacVersion = null,
    double MaxDutyCycle = null,
    double MaxEirp = null,
    double PingSlotDr = null,
    double PingSlotFreq = null,
    double PingSlotPeriod = null,
    string RegParamsRevision = null,
    string RfRegion = null,
    double RxDataRate2 = null,
    double RxDelay1 = null,
    double RxDrOffset1 = null,
    double RxFreq2 = null,
    bool|IResolvable Supports32BitFCnt = null,
    bool|IResolvable SupportsClassB = null,
    bool|IResolvable SupportsClassC = null,
    bool|IResolvable SupportsJoin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout">ClassBTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout">ClassCTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList">FactoryPresetFreqsList</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion">MacVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle">MaxDutyCycle</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp">MaxEirp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr">PingSlotDr</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq">PingSlotFreq</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod">PingSlotPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision">RegParamsRevision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion">RfRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2">RxDataRate2</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1">RxDelay1</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1">RxDrOffset1</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2">RxFreq2</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt">Supports32BitFCnt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB">SupportsClassB</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC">SupportsClassC</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin">SupportsJoin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}. |

---

##### `ClassBTimeout`<sup>Optional</sup> <a name="ClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout"></a>

```csharp
public double ClassBTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}.

---

##### `ClassCTimeout`<sup>Optional</sup> <a name="ClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout"></a>

```csharp
public double ClassCTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}.

---

##### `FactoryPresetFreqsList`<sup>Optional</sup> <a name="FactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList"></a>

```csharp
public double[] FactoryPresetFreqsList { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}.

---

##### `MacVersion`<sup>Optional</sup> <a name="MacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion"></a>

```csharp
public string MacVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}.

---

##### `MaxDutyCycle`<sup>Optional</sup> <a name="MaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle"></a>

```csharp
public double MaxDutyCycle { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}.

---

##### `MaxEirp`<sup>Optional</sup> <a name="MaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp"></a>

```csharp
public double MaxEirp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}.

---

##### `PingSlotDr`<sup>Optional</sup> <a name="PingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr"></a>

```csharp
public double PingSlotDr { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}.

---

##### `PingSlotFreq`<sup>Optional</sup> <a name="PingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq"></a>

```csharp
public double PingSlotFreq { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}.

---

##### `PingSlotPeriod`<sup>Optional</sup> <a name="PingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod"></a>

```csharp
public double PingSlotPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}.

---

##### `RegParamsRevision`<sup>Optional</sup> <a name="RegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision"></a>

```csharp
public string RegParamsRevision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}.

---

##### `RfRegion`<sup>Optional</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion"></a>

```csharp
public string RfRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}.

---

##### `RxDataRate2`<sup>Optional</sup> <a name="RxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2"></a>

```csharp
public double RxDataRate2 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}.

---

##### `RxDelay1`<sup>Optional</sup> <a name="RxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1"></a>

```csharp
public double RxDelay1 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}.

---

##### `RxDrOffset1`<sup>Optional</sup> <a name="RxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1"></a>

```csharp
public double RxDrOffset1 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}.

---

##### `RxFreq2`<sup>Optional</sup> <a name="RxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2"></a>

```csharp
public double RxFreq2 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}.

---

##### `Supports32BitFCnt`<sup>Optional</sup> <a name="Supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt"></a>

```csharp
public bool|IResolvable Supports32BitFCnt { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}.

---

##### `SupportsClassB`<sup>Optional</sup> <a name="SupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB"></a>

```csharp
public bool|IResolvable SupportsClassB { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}.

---

##### `SupportsClassC`<sup>Optional</sup> <a name="SupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC"></a>

```csharp
public bool|IResolvable SupportsClassC { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}.

---

##### `SupportsJoin`<sup>Optional</sup> <a name="SupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin"></a>

```csharp
public bool|IResolvable SupportsJoin { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}.

---

### IotwirelessDeviceProfileTags <a name="IotwirelessDeviceProfileTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessDeviceProfileLoRaWanOutputReference <a name="IotwirelessDeviceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileLoRaWanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout">ResetClassBTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout">ResetClassCTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList">ResetFactoryPresetFreqsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion">ResetMacVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle">ResetMaxDutyCycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp">ResetMaxEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr">ResetPingSlotDr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq">ResetPingSlotFreq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod">ResetPingSlotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision">ResetRegParamsRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion">ResetRfRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2">ResetRxDataRate2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1">ResetRxDelay1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1">ResetRxDrOffset1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2">ResetRxFreq2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt">ResetSupports32BitFCnt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB">ResetSupportsClassB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC">ResetSupportsClassC</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin">ResetSupportsJoin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassBTimeout` <a name="ResetClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout"></a>

```csharp
private void ResetClassBTimeout()
```

##### `ResetClassCTimeout` <a name="ResetClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout"></a>

```csharp
private void ResetClassCTimeout()
```

##### `ResetFactoryPresetFreqsList` <a name="ResetFactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList"></a>

```csharp
private void ResetFactoryPresetFreqsList()
```

##### `ResetMacVersion` <a name="ResetMacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion"></a>

```csharp
private void ResetMacVersion()
```

##### `ResetMaxDutyCycle` <a name="ResetMaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle"></a>

```csharp
private void ResetMaxDutyCycle()
```

##### `ResetMaxEirp` <a name="ResetMaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp"></a>

```csharp
private void ResetMaxEirp()
```

##### `ResetPingSlotDr` <a name="ResetPingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr"></a>

```csharp
private void ResetPingSlotDr()
```

##### `ResetPingSlotFreq` <a name="ResetPingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq"></a>

```csharp
private void ResetPingSlotFreq()
```

##### `ResetPingSlotPeriod` <a name="ResetPingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod"></a>

```csharp
private void ResetPingSlotPeriod()
```

##### `ResetRegParamsRevision` <a name="ResetRegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision"></a>

```csharp
private void ResetRegParamsRevision()
```

##### `ResetRfRegion` <a name="ResetRfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion"></a>

```csharp
private void ResetRfRegion()
```

##### `ResetRxDataRate2` <a name="ResetRxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2"></a>

```csharp
private void ResetRxDataRate2()
```

##### `ResetRxDelay1` <a name="ResetRxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1"></a>

```csharp
private void ResetRxDelay1()
```

##### `ResetRxDrOffset1` <a name="ResetRxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1"></a>

```csharp
private void ResetRxDrOffset1()
```

##### `ResetRxFreq2` <a name="ResetRxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2"></a>

```csharp
private void ResetRxFreq2()
```

##### `ResetSupports32BitFCnt` <a name="ResetSupports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt"></a>

```csharp
private void ResetSupports32BitFCnt()
```

##### `ResetSupportsClassB` <a name="ResetSupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB"></a>

```csharp
private void ResetSupportsClassB()
```

##### `ResetSupportsClassC` <a name="ResetSupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC"></a>

```csharp
private void ResetSupportsClassC()
```

##### `ResetSupportsJoin` <a name="ResetSupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin"></a>

```csharp
private void ResetSupportsJoin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput">ClassBTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput">ClassCTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput">FactoryPresetFreqsListInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput">MacVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput">MaxDutyCycleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput">MaxEirpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput">PingSlotDrInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput">PingSlotFreqInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput">PingSlotPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput">RegParamsRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput">RfRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input">RxDataRate2Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input">RxDelay1Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input">RxDrOffset1Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input">RxFreq2Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput">Supports32BitFCntInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput">SupportsClassBInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput">SupportsClassCInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput">SupportsJoinInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout">ClassBTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout">ClassCTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList">FactoryPresetFreqsList</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion">MacVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle">MaxDutyCycle</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp">MaxEirp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr">PingSlotDr</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq">PingSlotFreq</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod">PingSlotPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision">RegParamsRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion">RfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2">RxDataRate2</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1">RxDelay1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1">RxDrOffset1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2">RxFreq2</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt">Supports32BitFCnt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB">SupportsClassB</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC">SupportsClassC</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin">SupportsJoin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassBTimeoutInput`<sup>Optional</sup> <a name="ClassBTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput"></a>

```csharp
public double ClassBTimeoutInput { get; }
```

- *Type:* double

---

##### `ClassCTimeoutInput`<sup>Optional</sup> <a name="ClassCTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput"></a>

```csharp
public double ClassCTimeoutInput { get; }
```

- *Type:* double

---

##### `FactoryPresetFreqsListInput`<sup>Optional</sup> <a name="FactoryPresetFreqsListInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput"></a>

```csharp
public double[] FactoryPresetFreqsListInput { get; }
```

- *Type:* double[]

---

##### `MacVersionInput`<sup>Optional</sup> <a name="MacVersionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput"></a>

```csharp
public string MacVersionInput { get; }
```

- *Type:* string

---

##### `MaxDutyCycleInput`<sup>Optional</sup> <a name="MaxDutyCycleInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput"></a>

```csharp
public double MaxDutyCycleInput { get; }
```

- *Type:* double

---

##### `MaxEirpInput`<sup>Optional</sup> <a name="MaxEirpInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput"></a>

```csharp
public double MaxEirpInput { get; }
```

- *Type:* double

---

##### `PingSlotDrInput`<sup>Optional</sup> <a name="PingSlotDrInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput"></a>

```csharp
public double PingSlotDrInput { get; }
```

- *Type:* double

---

##### `PingSlotFreqInput`<sup>Optional</sup> <a name="PingSlotFreqInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput"></a>

```csharp
public double PingSlotFreqInput { get; }
```

- *Type:* double

---

##### `PingSlotPeriodInput`<sup>Optional</sup> <a name="PingSlotPeriodInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput"></a>

```csharp
public double PingSlotPeriodInput { get; }
```

- *Type:* double

---

##### `RegParamsRevisionInput`<sup>Optional</sup> <a name="RegParamsRevisionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput"></a>

```csharp
public string RegParamsRevisionInput { get; }
```

- *Type:* string

---

##### `RfRegionInput`<sup>Optional</sup> <a name="RfRegionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput"></a>

```csharp
public string RfRegionInput { get; }
```

- *Type:* string

---

##### `RxDataRate2Input`<sup>Optional</sup> <a name="RxDataRate2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input"></a>

```csharp
public double RxDataRate2Input { get; }
```

- *Type:* double

---

##### `RxDelay1Input`<sup>Optional</sup> <a name="RxDelay1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input"></a>

```csharp
public double RxDelay1Input { get; }
```

- *Type:* double

---

##### `RxDrOffset1Input`<sup>Optional</sup> <a name="RxDrOffset1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input"></a>

```csharp
public double RxDrOffset1Input { get; }
```

- *Type:* double

---

##### `RxFreq2Input`<sup>Optional</sup> <a name="RxFreq2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input"></a>

```csharp
public double RxFreq2Input { get; }
```

- *Type:* double

---

##### `Supports32BitFCntInput`<sup>Optional</sup> <a name="Supports32BitFCntInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput"></a>

```csharp
public bool|IResolvable Supports32BitFCntInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsClassBInput`<sup>Optional</sup> <a name="SupportsClassBInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput"></a>

```csharp
public bool|IResolvable SupportsClassBInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsClassCInput`<sup>Optional</sup> <a name="SupportsClassCInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput"></a>

```csharp
public bool|IResolvable SupportsClassCInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsJoinInput`<sup>Optional</sup> <a name="SupportsJoinInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput"></a>

```csharp
public bool|IResolvable SupportsJoinInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClassBTimeout`<sup>Required</sup> <a name="ClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout"></a>

```csharp
public double ClassBTimeout { get; }
```

- *Type:* double

---

##### `ClassCTimeout`<sup>Required</sup> <a name="ClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout"></a>

```csharp
public double ClassCTimeout { get; }
```

- *Type:* double

---

##### `FactoryPresetFreqsList`<sup>Required</sup> <a name="FactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList"></a>

```csharp
public double[] FactoryPresetFreqsList { get; }
```

- *Type:* double[]

---

##### `MacVersion`<sup>Required</sup> <a name="MacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion"></a>

```csharp
public string MacVersion { get; }
```

- *Type:* string

---

##### `MaxDutyCycle`<sup>Required</sup> <a name="MaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle"></a>

```csharp
public double MaxDutyCycle { get; }
```

- *Type:* double

---

##### `MaxEirp`<sup>Required</sup> <a name="MaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp"></a>

```csharp
public double MaxEirp { get; }
```

- *Type:* double

---

##### `PingSlotDr`<sup>Required</sup> <a name="PingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr"></a>

```csharp
public double PingSlotDr { get; }
```

- *Type:* double

---

##### `PingSlotFreq`<sup>Required</sup> <a name="PingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq"></a>

```csharp
public double PingSlotFreq { get; }
```

- *Type:* double

---

##### `PingSlotPeriod`<sup>Required</sup> <a name="PingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod"></a>

```csharp
public double PingSlotPeriod { get; }
```

- *Type:* double

---

##### `RegParamsRevision`<sup>Required</sup> <a name="RegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision"></a>

```csharp
public string RegParamsRevision { get; }
```

- *Type:* string

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion"></a>

```csharp
public string RfRegion { get; }
```

- *Type:* string

---

##### `RxDataRate2`<sup>Required</sup> <a name="RxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2"></a>

```csharp
public double RxDataRate2 { get; }
```

- *Type:* double

---

##### `RxDelay1`<sup>Required</sup> <a name="RxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1"></a>

```csharp
public double RxDelay1 { get; }
```

- *Type:* double

---

##### `RxDrOffset1`<sup>Required</sup> <a name="RxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1"></a>

```csharp
public double RxDrOffset1 { get; }
```

- *Type:* double

---

##### `RxFreq2`<sup>Required</sup> <a name="RxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2"></a>

```csharp
public double RxFreq2 { get; }
```

- *Type:* double

---

##### `Supports32BitFCnt`<sup>Required</sup> <a name="Supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt"></a>

```csharp
public bool|IResolvable Supports32BitFCnt { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsClassB`<sup>Required</sup> <a name="SupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB"></a>

```csharp
public bool|IResolvable SupportsClassB { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsClassC`<sup>Required</sup> <a name="SupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC"></a>

```csharp
public bool|IResolvable SupportsClassC { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupportsJoin`<sup>Required</sup> <a name="SupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin"></a>

```csharp
public bool|IResolvable SupportsJoin { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileLoRaWan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---


### IotwirelessDeviceProfileTagsList <a name="IotwirelessDeviceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get"></a>

```csharp
private IotwirelessDeviceProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>[]

---


### IotwirelessDeviceProfileTagsOutputReference <a name="IotwirelessDeviceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessDeviceProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessDeviceProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>

---



