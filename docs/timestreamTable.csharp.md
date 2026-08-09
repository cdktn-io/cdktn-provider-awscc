# `timestreamTable` Submodule <a name="`timestreamTable` Submodule" id="@cdktn/provider-awscc.timestreamTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamTable <a name="TimestreamTable" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table awscc_timestream_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTable(Construct Scope, string Id, TimestreamTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig">TimestreamTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig">TimestreamTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties">PutMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties">PutRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties">ResetMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties">ResetRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMagneticStoreWriteProperties` <a name="PutMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties"></a>

```csharp
private void PutMagneticStoreWriteProperties(TimestreamTableMagneticStoreWriteProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---

##### `PutRetentionProperties` <a name="PutRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties"></a>

```csharp
private void PutRetentionProperties(TimestreamTableRetentionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema"></a>

```csharp
private void PutSchema(TimestreamTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags"></a>

```csharp
private void PutTags(IResolvable|TimestreamTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]

---

##### `ResetMagneticStoreWriteProperties` <a name="ResetMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties"></a>

```csharp
private void ResetMagneticStoreWriteProperties()
```

##### `ResetRetentionProperties` <a name="ResetRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties"></a>

```csharp
private void ResetRetentionProperties()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TimestreamTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties">MagneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties">RetentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput">MagneticStoreWritePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput">RetentionPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput">SchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MagneticStoreWriteProperties`<sup>Required</sup> <a name="MagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties"></a>

```csharp
public TimestreamTableMagneticStoreWritePropertiesOutputReference MagneticStoreWriteProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetentionProperties`<sup>Required</sup> <a name="RetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties"></a>

```csharp
public TimestreamTableRetentionPropertiesOutputReference RetentionProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema"></a>

```csharp
public TimestreamTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags"></a>

```csharp
public TimestreamTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `MagneticStoreWritePropertiesInput`<sup>Optional</sup> <a name="MagneticStoreWritePropertiesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWriteProperties MagneticStoreWritePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---

##### `RetentionPropertiesInput`<sup>Optional</sup> <a name="RetentionPropertiesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput"></a>

```csharp
public IResolvable|TimestreamTableRetentionProperties RetentionPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput"></a>

```csharp
public IResolvable|TimestreamTableSchema SchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput"></a>

```csharp
public IResolvable|TimestreamTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamTableConfig <a name="TimestreamTableConfig" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatabaseName,
    TimestreamTableMagneticStoreWriteProperties MagneticStoreWriteProperties = null,
    TimestreamTableRetentionProperties RetentionProperties = null,
    TimestreamTableSchema Schema = null,
    string TableName = null,
    IResolvable|TimestreamTableTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name for the database which the table to be created belongs to. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties">MagneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | The properties that determine whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties">RetentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | The retention duration of the memory store and the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | A Schema specifies the expected data model of the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName">TableName</a></code> | <code>string</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name for the database which the table to be created belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#database_name TimestreamTable#database_name}

---

##### `MagneticStoreWriteProperties`<sup>Optional</sup> <a name="MagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties"></a>

```csharp
public TimestreamTableMagneticStoreWriteProperties MagneticStoreWriteProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

The properties that determine whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_write_properties TimestreamTable#magnetic_store_write_properties}

---

##### `RetentionProperties`<sup>Optional</sup> <a name="RetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties"></a>

```csharp
public TimestreamTableRetentionProperties RetentionProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

The retention duration of the memory store and the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#retention_properties TimestreamTable#retention_properties}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema"></a>

```csharp
public TimestreamTableSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

A Schema specifies the expected data model of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#schema TimestreamTable#schema}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name for the table.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#table_name TimestreamTable#table_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags"></a>

```csharp
public IResolvable|TimestreamTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#tags TimestreamTable#tags}

---

### TimestreamTableMagneticStoreWriteProperties <a name="TimestreamTableMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWriteProperties {
    bool|IResolvable EnableMagneticStoreWrites = null,
    TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation MagneticStoreRejectedDataLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites">EnableMagneticStoreWrites</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag indicating whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation">MagneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | Location to store information about records that were asynchronously rejected during magnetic store writes. |

---

##### `EnableMagneticStoreWrites`<sup>Optional</sup> <a name="EnableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites"></a>

```csharp
public bool|IResolvable EnableMagneticStoreWrites { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag indicating whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#enable_magnetic_store_writes TimestreamTable#enable_magnetic_store_writes}

---

##### `MagneticStoreRejectedDataLocation`<sup>Optional</sup> <a name="MagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation"></a>

```csharp
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation MagneticStoreRejectedDataLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

Location to store information about records that were asynchronously rejected during magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_rejected_data_location TimestreamTable#magnetic_store_rejected_data_location}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
    TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | S3 configuration for location to store rejections from magnetic store writes. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration"></a>

```csharp
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

S3 configuration for location to store rejections from magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#s3_configuration TimestreamTable#s3_configuration}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
    string BucketName = null,
    string EncryptionOption = null,
    string KmsKeyId = null,
    string ObjectKeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | The bucket name used to store the data. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | Either SSE_KMS or SSE_S3. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Must be provided if SSE_KMS is specified as the encryption option. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>string</code> | String used to prefix all data in the bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The bucket name used to store the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#bucket_name TimestreamTable#bucket_name}

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; set; }
```

- *Type:* string

Either SSE_KMS or SSE_S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#encryption_option TimestreamTable#encryption_option}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Must be provided if SSE_KMS is specified as the encryption option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#kms_key_id TimestreamTable#kms_key_id}

---

##### `ObjectKeyPrefix`<sup>Optional</sup> <a name="ObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix"></a>

```csharp
public string ObjectKeyPrefix { get; set; }
```

- *Type:* string

String used to prefix all data in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#object_key_prefix TimestreamTable#object_key_prefix}

---

### TimestreamTableRetentionProperties <a name="TimestreamTableRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableRetentionProperties {
    string MagneticStoreRetentionPeriodInDays = null,
    string MemoryStoreRetentionPeriodInHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays">MagneticStoreRetentionPeriodInDays</a></code> | <code>string</code> | The duration for which data must be stored in the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours">MemoryStoreRetentionPeriodInHours</a></code> | <code>string</code> | The duration for which data must be stored in the memory store. |

---

##### `MagneticStoreRetentionPeriodInDays`<sup>Optional</sup> <a name="MagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

```csharp
public string MagneticStoreRetentionPeriodInDays { get; set; }
```

- *Type:* string

The duration for which data must be stored in the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#magnetic_store_retention_period_in_days TimestreamTable#magnetic_store_retention_period_in_days}

---

##### `MemoryStoreRetentionPeriodInHours`<sup>Optional</sup> <a name="MemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

```csharp
public string MemoryStoreRetentionPeriodInHours { get; set; }
```

- *Type:* string

The duration for which data must be stored in the memory store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#memory_store_retention_period_in_hours TimestreamTable#memory_store_retention_period_in_hours}

---

### TimestreamTableSchema <a name="TimestreamTableSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableSchema {
    IResolvable|TimestreamTableSchemaCompositePartitionKey[] CompositePartitionKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey">CompositePartitionKey</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]</code> | A list of partition keys defining the attributes used to partition the table data. |

---

##### `CompositePartitionKey`<sup>Optional</sup> <a name="CompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey"></a>

```csharp
public IResolvable|TimestreamTableSchemaCompositePartitionKey[] CompositePartitionKey { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]

A list of partition keys defining the attributes used to partition the table data.

The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#composite_partition_key TimestreamTable#composite_partition_key}

---

### TimestreamTableSchemaCompositePartitionKey <a name="TimestreamTableSchemaCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableSchemaCompositePartitionKey {
    string EnforcementInRecord = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord">EnforcementInRecord</a></code> | <code>string</code> | The level of enforcement for the specification of a dimension key in ingested records. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name">Name</a></code> | <code>string</code> | The name of the attribute used for a dimension key. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type">Type</a></code> | <code>string</code> | The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key). |

---

##### `EnforcementInRecord`<sup>Optional</sup> <a name="EnforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord"></a>

```csharp
public string EnforcementInRecord { get; set; }
```

- *Type:* string

The level of enforcement for the specification of a dimension key in ingested records.

Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#enforcement_in_record TimestreamTable#enforcement_in_record}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the attribute used for a dimension key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#name TimestreamTable#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#type TimestreamTable#type}

---

### TimestreamTableTags <a name="TimestreamTableTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#key TimestreamTable#key}. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#value TimestreamTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#key TimestreamTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_table#value TimestreamTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```csharp
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration S3ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix">ResetObjectKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption"></a>

```csharp
private void ResetEncryptionOption()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetObjectKeyPrefix` <a name="ResetObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix"></a>

```csharp
private void ResetObjectKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput">ObjectKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput"></a>

```csharp
public string EncryptionOptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ObjectKeyPrefixInput`<sup>Optional</sup> <a name="ObjectKeyPrefixInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput"></a>

```csharp
public string ObjectKeyPrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ObjectKeyPrefix`<sup>Required</sup> <a name="ObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```csharp
public string ObjectKeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### TimestreamTableMagneticStoreWritePropertiesOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableMagneticStoreWritePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation">PutMagneticStoreRejectedDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites">ResetEnableMagneticStoreWrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation">ResetMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMagneticStoreRejectedDataLocation` <a name="PutMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation"></a>

```csharp
private void PutMagneticStoreRejectedDataLocation(TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---

##### `ResetEnableMagneticStoreWrites` <a name="ResetEnableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites"></a>

```csharp
private void ResetEnableMagneticStoreWrites()
```

##### `ResetMagneticStoreRejectedDataLocation` <a name="ResetMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation"></a>

```csharp
private void ResetMagneticStoreRejectedDataLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">MagneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput">EnableMagneticStoreWritesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput">MagneticStoreRejectedDataLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">EnableMagneticStoreWrites</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MagneticStoreRejectedDataLocation`<sup>Required</sup> <a name="MagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```csharp
public TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference MagneticStoreRejectedDataLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a>

---

##### `EnableMagneticStoreWritesInput`<sup>Optional</sup> <a name="EnableMagneticStoreWritesInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput"></a>

```csharp
public bool|IResolvable EnableMagneticStoreWritesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MagneticStoreRejectedDataLocationInput`<sup>Optional</sup> <a name="MagneticStoreRejectedDataLocationInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation MagneticStoreRejectedDataLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---

##### `EnableMagneticStoreWrites`<sup>Required</sup> <a name="EnableMagneticStoreWrites" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```csharp
public bool|IResolvable EnableMagneticStoreWrites { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableMagneticStoreWriteProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---


### TimestreamTableRetentionPropertiesOutputReference <a name="TimestreamTableRetentionPropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableRetentionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays">ResetMagneticStoreRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours">ResetMemoryStoreRetentionPeriodInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMagneticStoreRetentionPeriodInDays` <a name="ResetMagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays"></a>

```csharp
private void ResetMagneticStoreRetentionPeriodInDays()
```

##### `ResetMemoryStoreRetentionPeriodInHours` <a name="ResetMemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours"></a>

```csharp
private void ResetMemoryStoreRetentionPeriodInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput">MagneticStoreRetentionPeriodInDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput">MemoryStoreRetentionPeriodInHoursInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">MagneticStoreRetentionPeriodInDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">MemoryStoreRetentionPeriodInHours</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MagneticStoreRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="MagneticStoreRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput"></a>

```csharp
public string MagneticStoreRetentionPeriodInDaysInput { get; }
```

- *Type:* string

---

##### `MemoryStoreRetentionPeriodInHoursInput`<sup>Optional</sup> <a name="MemoryStoreRetentionPeriodInHoursInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput"></a>

```csharp
public string MemoryStoreRetentionPeriodInHoursInput { get; }
```

- *Type:* string

---

##### `MagneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="MagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```csharp
public string MagneticStoreRetentionPeriodInDays { get; }
```

- *Type:* string

---

##### `MemoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="MemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```csharp
public string MemoryStoreRetentionPeriodInHours { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableRetentionProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---


### TimestreamTableSchemaCompositePartitionKeyList <a name="TimestreamTableSchemaCompositePartitionKeyList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableSchemaCompositePartitionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get"></a>

```csharp
private TimestreamTableSchemaCompositePartitionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableSchemaCompositePartitionKey[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]

---


### TimestreamTableSchemaCompositePartitionKeyOutputReference <a name="TimestreamTableSchemaCompositePartitionKeyOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableSchemaCompositePartitionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord">ResetEnforcementInRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforcementInRecord` <a name="ResetEnforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord"></a>

```csharp
private void ResetEnforcementInRecord()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput">EnforcementInRecordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">EnforcementInRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcementInRecordInput`<sup>Optional</sup> <a name="EnforcementInRecordInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput"></a>

```csharp
public string EnforcementInRecordInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `EnforcementInRecord`<sup>Required</sup> <a name="EnforcementInRecord" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```csharp
public string EnforcementInRecord { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableSchemaCompositePartitionKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>

---


### TimestreamTableSchemaOutputReference <a name="TimestreamTableSchemaOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey">PutCompositePartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey">ResetCompositePartitionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositePartitionKey` <a name="PutCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey"></a>

```csharp
private void PutCompositePartitionKey(IResolvable|TimestreamTableSchemaCompositePartitionKey[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]

---

##### `ResetCompositePartitionKey` <a name="ResetCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey"></a>

```csharp
private void ResetCompositePartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey">CompositePartitionKey</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput">CompositePartitionKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositePartitionKey`<sup>Required</sup> <a name="CompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey"></a>

```csharp
public TimestreamTableSchemaCompositePartitionKeyList CompositePartitionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a>

---

##### `CompositePartitionKeyInput`<sup>Optional</sup> <a name="CompositePartitionKeyInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput"></a>

```csharp
public IResolvable|TimestreamTableSchemaCompositePartitionKey[] CompositePartitionKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---


### TimestreamTableTagsList <a name="TimestreamTableTagsList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get"></a>

```csharp
private TimestreamTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>[]

---


### TimestreamTableTagsOutputReference <a name="TimestreamTableTagsOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TimestreamTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TimestreamTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>

---



