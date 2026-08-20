# `iotwirelessWirelessDeviceImportTask` Submodule <a name="`iotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDeviceImportTask <a name="IotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTask(Construct Scope, string Id, IotwirelessWirelessDeviceImportTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk">PutSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSidewalk` <a name="PutSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk"></a>

```csharp
private void PutSidewalk(IotwirelessWirelessDeviceImportTaskSidewalk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessWirelessDeviceImportTaskTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDeviceImportTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDeviceImportTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDeviceImportTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessWirelessDeviceImportTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessWirelessDeviceImportTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">FailedImportedDevicesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">InitializedImportedDevicesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">OnboardedImportedDevicesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">PendingImportedDevicesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">WirelessDeviceImportTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput">DestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput">SidewalkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName">DestinationName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `FailedImportedDevicesCount`<sup>Required</sup> <a name="FailedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```csharp
public double FailedImportedDevicesCount { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitializedImportedDevicesCount`<sup>Required</sup> <a name="InitializedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```csharp
public double InitializedImportedDevicesCount { get; }
```

- *Type:* double

---

##### `OnboardedImportedDevicesCount`<sup>Required</sup> <a name="OnboardedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```csharp
public double OnboardedImportedDevicesCount { get; }
```

- *Type:* double

---

##### `PendingImportedDevicesCount`<sup>Required</sup> <a name="PendingImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```csharp
public double PendingImportedDevicesCount { get; }
```

- *Type:* double

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```csharp
public IotwirelessWirelessDeviceImportTaskSidewalkOutputReference Sidewalk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags"></a>

```csharp
public IotwirelessWirelessDeviceImportTaskTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `WirelessDeviceImportTaskId`<sup>Required</sup> <a name="WirelessDeviceImportTaskId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```csharp
public string WirelessDeviceImportTaskId { get; }
```

- *Type:* string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput"></a>

```csharp
public string DestinationNameInput { get; }
```

- *Type:* string

---

##### `SidewalkInput`<sup>Optional</sup> <a name="SidewalkInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskSidewalk SidewalkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```csharp
public string DestinationName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceImportTaskConfig <a name="IotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationName,
    IotwirelessWirelessDeviceImportTaskSidewalk Sidewalk,
    IResolvable|IotwirelessWirelessDeviceImportTaskTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName">DestinationName</a></code> | <code>string</code> | Destination Name for import task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | sidewalk contain file for created device and role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName"></a>

```csharp
public string DestinationName { get; set; }
```

- *Type:* string

Destination Name for import task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#destination_name IotwirelessWirelessDeviceImportTask#destination_name}

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk"></a>

```csharp
public IotwirelessWirelessDeviceImportTaskSidewalk Sidewalk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

sidewalk contain file for created device and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk IotwirelessWirelessDeviceImportTask#sidewalk}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#tags IotwirelessWirelessDeviceImportTask#tags}

---

### IotwirelessWirelessDeviceImportTaskSidewalk <a name="IotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskSidewalk {
    string DeviceCreationFile = null,
    string Role = null,
    string SidewalkManufacturingSn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile">DeviceCreationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role">Role</a></code> | <code>string</code> | sidewalk role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn">SidewalkManufacturingSn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}. |

---

##### `DeviceCreationFile`<sup>Optional</sup> <a name="DeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile"></a>

```csharp
public string DeviceCreationFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

sidewalk role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#role IotwirelessWirelessDeviceImportTask#role}

---

##### `SidewalkManufacturingSn`<sup>Optional</sup> <a name="SidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn"></a>

```csharp
public string SidewalkManufacturingSn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}.

---

### IotwirelessWirelessDeviceImportTaskTags <a name="IotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#key IotwirelessWirelessDeviceImportTask#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device_import_task#value IotwirelessWirelessDeviceImportTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="IotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskSidewalkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile">ResetDeviceCreationFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn">ResetSidewalkManufacturingSn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceCreationFile` <a name="ResetDeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile"></a>

```csharp
private void ResetDeviceCreationFile()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSidewalkManufacturingSn` <a name="ResetSidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn"></a>

```csharp
private void ResetSidewalkManufacturingSn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">DeviceCreationFileList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput">DeviceCreationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput">SidewalkManufacturingSnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">DeviceCreationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">SidewalkManufacturingSn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceCreationFileList`<sup>Required</sup> <a name="DeviceCreationFileList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```csharp
public string[] DeviceCreationFileList { get; }
```

- *Type:* string[]

---

##### `DeviceCreationFileInput`<sup>Optional</sup> <a name="DeviceCreationFileInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput"></a>

```csharp
public string DeviceCreationFileInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SidewalkManufacturingSnInput`<sup>Optional</sup> <a name="SidewalkManufacturingSnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput"></a>

```csharp
public string SidewalkManufacturingSnInput { get; }
```

- *Type:* string

---

##### `DeviceCreationFile`<sup>Required</sup> <a name="DeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```csharp
public string DeviceCreationFile { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SidewalkManufacturingSn`<sup>Required</sup> <a name="SidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```csharp
public string SidewalkManufacturingSn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskSidewalk InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---


### IotwirelessWirelessDeviceImportTaskTagsList <a name="IotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```csharp
private IotwirelessWirelessDeviceImportTaskTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---


### IotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="IotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessWirelessDeviceImportTaskTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessWirelessDeviceImportTaskTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>

---



