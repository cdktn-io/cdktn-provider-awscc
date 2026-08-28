# `databrewDataset` Submodule <a name="`databrewDataset` Submodule" id="@cdktn/provider-awscc.databrewDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewDataset <a name="DatabrewDataset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset awscc_databrew_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDataset(Construct Scope, string Id, DatabrewDatasetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig">DatabrewDatasetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig">DatabrewDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions">PutPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions">ResetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions"></a>

```csharp
private void PutFormatOptions(DatabrewDatasetFormatOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `PutInput` <a name="PutInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput"></a>

```csharp
private void PutInput(DatabrewDatasetInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `PutPathOptions` <a name="PutPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions"></a>

```csharp
private void PutPathOptions(DatabrewDatasetPathOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags"></a>

```csharp
private void PutTags(IResolvable|DatabrewDatasetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions"></a>

```csharp
private void ResetFormatOptions()
```

##### `ResetPathOptions` <a name="ResetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions"></a>

```csharp
private void ResetPathOptions()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewDataset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewDataset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewDataset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatabrewDataset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabrewDataset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabrewDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions">PathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput">PathOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions"></a>

```csharp
public DatabrewDatasetFormatOptionsOutputReference FormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input"></a>

```csharp
public DatabrewDatasetInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a>

---

##### `PathOptions`<sup>Required</sup> <a name="PathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions"></a>

```csharp
public DatabrewDatasetPathOptionsOutputReference PathOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags"></a>

```csharp
public DatabrewDatasetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptions FormatOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput"></a>

```csharp
public IResolvable|DatabrewDatasetInput InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathOptionsInput`<sup>Optional</sup> <a name="PathOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptions PathOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput"></a>

```csharp
public IResolvable|DatabrewDatasetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewDatasetConfig <a name="DatabrewDatasetConfig" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DatabrewDatasetInput Input,
    string Name,
    string Format = null,
    DatabrewDatasetFormatOptions FormatOptions = null,
    DatabrewDatasetPathOptions PathOptions = null,
    string Source = null,
    IResolvable|DatabrewDatasetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name">Name</a></code> | <code>string</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format">Format</a></code> | <code>string</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions">PathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source">Source</a></code> | <code>string</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input"></a>

```csharp
public DatabrewDatasetInput Input { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions"></a>

```csharp
public DatabrewDatasetFormatOptions FormatOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `PathOptions`<sup>Optional</sup> <a name="PathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions"></a>

```csharp
public DatabrewDatasetPathOptions PathOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags"></a>

```csharp
public IResolvable|DatabrewDatasetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

### DatabrewDatasetFormatOptions <a name="DatabrewDatasetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptions {
    DatabrewDatasetFormatOptionsCsv Csv = null,
    DatabrewDatasetFormatOptionsExcel Excel = null,
    DatabrewDatasetFormatOptionsJson Json = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | Csv options. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel">Excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | Json options. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv"></a>

```csharp
public DatabrewDatasetFormatOptionsCsv Csv { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}

---

##### `Excel`<sup>Optional</sup> <a name="Excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel"></a>

```csharp
public DatabrewDatasetFormatOptionsExcel Excel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}.

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json"></a>

```csharp
public DatabrewDatasetFormatOptionsJson Json { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

Json options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#json DatabrewDataset#json}

---

### DatabrewDatasetFormatOptionsCsv <a name="DatabrewDatasetFormatOptionsCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsCsv {
    string Delimiter = null,
    bool|IResolvable HeaderRow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow">HeaderRow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}.

---

##### `HeaderRow`<sup>Optional</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow"></a>

```csharp
public bool|IResolvable HeaderRow { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

### DatabrewDatasetFormatOptionsExcel <a name="DatabrewDatasetFormatOptionsExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsExcel {
    bool|IResolvable HeaderRow = null,
    double[] SheetIndexes = null,
    string[] SheetNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow">HeaderRow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes">SheetIndexes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames">SheetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}. |

---

##### `HeaderRow`<sup>Optional</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow"></a>

```csharp
public bool|IResolvable HeaderRow { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

##### `SheetIndexes`<sup>Optional</sup> <a name="SheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes"></a>

```csharp
public double[] SheetIndexes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}.

---

##### `SheetNames`<sup>Optional</sup> <a name="SheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames"></a>

```csharp
public string[] SheetNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}.

---

### DatabrewDatasetFormatOptionsJson <a name="DatabrewDatasetFormatOptionsJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsJson {
    bool|IResolvable MultiLine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine">MultiLine</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}. |

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine"></a>

```csharp
public bool|IResolvable MultiLine { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}.

---

### DatabrewDatasetInput <a name="DatabrewDatasetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInput {
    DatabrewDatasetInputDatabaseInputDefinition DatabaseInputDefinition = null,
    DatabrewDatasetInputDataCatalogInputDefinition DataCatalogInputDefinition = null,
    DatabrewDatasetInputMetadata Metadata = null,
    DatabrewDatasetInputS3InputDefinition S3InputDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition">DatabaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition">DataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition">S3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | Input location. |

---

##### `DatabaseInputDefinition`<sup>Optional</sup> <a name="DatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition"></a>

```csharp
public DatabrewDatasetInputDatabaseInputDefinition DatabaseInputDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}.

---

##### `DataCatalogInputDefinition`<sup>Optional</sup> <a name="DataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition"></a>

```csharp
public DatabrewDatasetInputDataCatalogInputDefinition DataCatalogInputDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata"></a>

```csharp
public DatabrewDatasetInputMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}.

---

##### `S3InputDefinition`<sup>Optional</sup> <a name="S3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition"></a>

```csharp
public DatabrewDatasetInputS3InputDefinition S3InputDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}

---

### DatabrewDatasetInputDatabaseInputDefinition <a name="DatabrewDatasetInputDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDatabaseInputDefinition {
    string DatabaseTableName = null,
    string GlueConnectionName = null,
    string QueryString = null,
    DatabrewDatasetInputDatabaseInputDefinitionTempDirectory TempDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName">DatabaseTableName</a></code> | <code>string</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | Glue connection name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString">QueryString</a></code> | <code>string</code> | Custom SQL to run against the provided AWS Glue connection. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `DatabaseTableName`<sup>Optional</sup> <a name="DatabaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName"></a>

```csharp
public string DatabaseTableName { get; set; }
```

- *Type:* string

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}

---

##### `GlueConnectionName`<sup>Optional</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; set; }
```

- *Type:* string

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

Custom SQL to run against the provided AWS Glue connection.

This SQL will be used as the input for DataBrew projects and jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}

---

##### `TempDirectory`<sup>Optional</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory"></a>

```csharp
public DatabrewDatasetInputDatabaseInputDefinitionTempDirectory TempDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDatabaseInputDefinitionTempDirectory <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDatabaseInputDefinitionTempDirectory {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputDataCatalogInputDefinition <a name="DatabrewDatasetInputDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDataCatalogInputDefinition {
    string CatalogId = null,
    string DatabaseName = null,
    string TableName = null,
    DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory TempDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId">CatalogId</a></code> | <code>string</code> | Catalog id. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName">DatabaseName</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName">TableName</a></code> | <code>string</code> | Table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Catalog id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}

---

##### `TempDirectory`<sup>Optional</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory"></a>

```csharp
public DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory TempDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputMetadata <a name="DatabrewDatasetInputMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputMetadata {
    string SourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn">SourceArn</a></code> | <code>string</code> | Arn of the source of the dataset. For e.g.: AppFlow Flow ARN. |

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}

---

### DatabrewDatasetInputS3InputDefinition <a name="DatabrewDatasetInputS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputS3InputDefinition {
    string Bucket = null,
    string BucketOwner = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetPathOptions <a name="DatabrewDatasetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptions {
    DatabrewDatasetPathOptionsFilesLimit FilesLimit = null,
    DatabrewDatasetPathOptionsLastModifiedDateCondition LastModifiedDateCondition = null,
    IResolvable|DatabrewDatasetPathOptionsParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit">FilesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition">LastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}. |

---

##### `FilesLimit`<sup>Optional</sup> <a name="FilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit"></a>

```csharp
public DatabrewDatasetPathOptionsFilesLimit FilesLimit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}.

---

##### `LastModifiedDateCondition`<sup>Optional</sup> <a name="LastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition"></a>

```csharp
public DatabrewDatasetPathOptionsLastModifiedDateCondition LastModifiedDateCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}.

---

### DatabrewDatasetPathOptionsFilesLimit <a name="DatabrewDatasetPathOptionsFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsFilesLimit {
    double MaxFiles = null,
    string Order = null,
    string OrderedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles">MaxFiles</a></code> | <code>double</code> | Maximum number of files. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order">Order</a></code> | <code>string</code> | Order. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy">OrderedBy</a></code> | <code>string</code> | Ordered by. |

---

##### `MaxFiles`<sup>Optional</sup> <a name="MaxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles"></a>

```csharp
public double MaxFiles { get; set; }
```

- *Type:* double

Maximum number of files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#order DatabrewDataset#order}

---

##### `OrderedBy`<sup>Optional</sup> <a name="OrderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy"></a>

```csharp
public string OrderedBy { get; set; }
```

- *Type:* string

Ordered by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}

---

### DatabrewDatasetPathOptionsLastModifiedDateCondition <a name="DatabrewDatasetPathOptionsLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsLastModifiedDateCondition {
    string Expression = null,
    IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] ValuesMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression">Expression</a></code> | <code>string</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap">ValuesMap</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `ValuesMap`<sup>Optional</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] ValuesMap { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap {
    string Value = null,
    string ValueReference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference">ValueReference</a></code> | <code>string</code> | Variable name. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `ValueReference`<sup>Optional</sup> <a name="ValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference"></a>

```csharp
public string ValueReference { get; set; }
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetPathOptionsParameters <a name="DatabrewDatasetPathOptionsParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParameters {
    DatabrewDatasetPathOptionsParametersDatasetParameter DatasetParameter = null,
    string PathParameterName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter">DatasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName">PathParameterName</a></code> | <code>string</code> | Parameter name. |

---

##### `DatasetParameter`<sup>Optional</sup> <a name="DatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameter DatasetParameter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}.

---

##### `PathParameterName`<sup>Optional</sup> <a name="PathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName"></a>

```csharp
public string PathParameterName { get; set; }
```

- *Type:* string

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_parameter_name DatabrewDataset#path_parameter_name}

---

### DatabrewDatasetPathOptionsParametersDatasetParameter <a name="DatabrewDatasetPathOptionsParametersDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameter {
    bool|IResolvable CreateColumn = null,
    DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions DatetimeOptions = null,
    DatabrewDatasetPathOptionsParametersDatasetParameterFilter Filter = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn">CreateColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Add the value of this parameter as a column in a dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions">DatetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name">Name</a></code> | <code>string</code> | Parameter name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type">Type</a></code> | <code>string</code> | Parameter type. |

---

##### `CreateColumn`<sup>Optional</sup> <a name="CreateColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn"></a>

```csharp
public bool|IResolvable CreateColumn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Add the value of this parameter as a column in a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}

---

##### `DatetimeOptions`<sup>Optional</sup> <a name="DatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions DatetimeOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#type DatabrewDataset#type}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions {
    string Format = null,
    string LocaleCode = null,
    string TimezoneOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format">Format</a></code> | <code>string</code> | Date/time format of a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode">LocaleCode</a></code> | <code>string</code> | Locale code for a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset">TimezoneOffset</a></code> | <code>string</code> | Timezone offset. |

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Date/time format of a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `LocaleCode`<sup>Optional</sup> <a name="LocaleCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode"></a>

```csharp
public string LocaleCode { get; set; }
```

- *Type:* string

Locale code for a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}

---

##### `TimezoneOffset`<sup>Optional</sup> <a name="TimezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset"></a>

```csharp
public string TimezoneOffset { get; set; }
```

- *Type:* string

Timezone offset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilter <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilter {
    string Expression = null,
    IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] ValuesMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression">Expression</a></code> | <code>string</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap">ValuesMap</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `ValuesMap`<sup>Optional</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] ValuesMap { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap {
    string Value = null,
    string ValueReference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference">ValueReference</a></code> | <code>string</code> | Variable name. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `ValueReference`<sup>Optional</sup> <a name="ValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference"></a>

```csharp
public string ValueReference { get; set; }
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetTags <a name="DatabrewDatasetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewDatasetFormatOptionsCsvOutputReference <a name="DatabrewDatasetFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow">ResetHeaderRow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetHeaderRow` <a name="ResetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow"></a>

```csharp
private void ResetHeaderRow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput">HeaderRowInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow">HeaderRow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `HeaderRowInput`<sup>Optional</sup> <a name="HeaderRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput"></a>

```csharp
public bool|IResolvable HeaderRowInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `HeaderRow`<sup>Required</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow"></a>

```csharp
public bool|IResolvable HeaderRow { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsCsv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---


### DatabrewDatasetFormatOptionsExcelOutputReference <a name="DatabrewDatasetFormatOptionsExcelOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsExcelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow">ResetHeaderRow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes">ResetSheetIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames">ResetSheetNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderRow` <a name="ResetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow"></a>

```csharp
private void ResetHeaderRow()
```

##### `ResetSheetIndexes` <a name="ResetSheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes"></a>

```csharp
private void ResetSheetIndexes()
```

##### `ResetSheetNames` <a name="ResetSheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames"></a>

```csharp
private void ResetSheetNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput">HeaderRowInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput">SheetIndexesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput">SheetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow">HeaderRow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes">SheetIndexes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames">SheetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderRowInput`<sup>Optional</sup> <a name="HeaderRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput"></a>

```csharp
public bool|IResolvable HeaderRowInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SheetIndexesInput`<sup>Optional</sup> <a name="SheetIndexesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput"></a>

```csharp
public double[] SheetIndexesInput { get; }
```

- *Type:* double[]

---

##### `SheetNamesInput`<sup>Optional</sup> <a name="SheetNamesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput"></a>

```csharp
public string[] SheetNamesInput { get; }
```

- *Type:* string[]

---

##### `HeaderRow`<sup>Required</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow"></a>

```csharp
public bool|IResolvable HeaderRow { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SheetIndexes`<sup>Required</sup> <a name="SheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes"></a>

```csharp
public double[] SheetIndexes { get; }
```

- *Type:* double[]

---

##### `SheetNames`<sup>Required</sup> <a name="SheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames"></a>

```csharp
public string[] SheetNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsExcel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---


### DatabrewDatasetFormatOptionsJsonOutputReference <a name="DatabrewDatasetFormatOptionsJsonOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine"></a>

```csharp
private void ResetMultiLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput"></a>

```csharp
public bool|IResolvable MultiLineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine"></a>

```csharp
public bool|IResolvable MultiLine { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsJson InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---


### DatabrewDatasetFormatOptionsOutputReference <a name="DatabrewDatasetFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel">PutExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel">ResetExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson">ResetJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv"></a>

```csharp
private void PutCsv(DatabrewDatasetFormatOptionsCsv Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `PutExcel` <a name="PutExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel"></a>

```csharp
private void PutExcel(DatabrewDatasetFormatOptionsExcel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson"></a>

```csharp
private void PutJson(DatabrewDatasetFormatOptionsJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv"></a>

```csharp
private void ResetCsv()
```

##### `ResetExcel` <a name="ResetExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel"></a>

```csharp
private void ResetExcel()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel">Excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput">CsvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput">ExcelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput">JsonInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv"></a>

```csharp
public DatabrewDatasetFormatOptionsCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a>

---

##### `Excel`<sup>Required</sup> <a name="Excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel"></a>

```csharp
public DatabrewDatasetFormatOptionsExcelOutputReference Excel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json"></a>

```csharp
public DatabrewDatasetFormatOptionsJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsCsv CsvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `ExcelInput`<sup>Optional</sup> <a name="ExcelInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsExcel ExcelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptionsJson JsonInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetFormatOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDatabaseInputDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory">PutTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName">ResetDatabaseTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName">ResetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory">ResetTempDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTempDirectory` <a name="PutTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory"></a>

```csharp
private void PutTempDirectory(DatabrewDatasetInputDatabaseInputDefinitionTempDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `ResetDatabaseTableName` <a name="ResetDatabaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName"></a>

```csharp
private void ResetDatabaseTableName()
```

##### `ResetGlueConnectionName` <a name="ResetGlueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName"></a>

```csharp
private void ResetGlueConnectionName()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```

##### `ResetTempDirectory` <a name="ResetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory"></a>

```csharp
private void ResetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput">DatabaseTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput">GlueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput">TempDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName">DatabaseTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory"></a>

```csharp
public DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference TempDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a>

---

##### `DatabaseTableNameInput`<sup>Optional</sup> <a name="DatabaseTableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput"></a>

```csharp
public string DatabaseTableNameInput { get; }
```

- *Type:* string

---

##### `GlueConnectionNameInput`<sup>Optional</sup> <a name="GlueConnectionNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput"></a>

```csharp
public string GlueConnectionNameInput { get; }
```

- *Type:* string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `TempDirectoryInput`<sup>Optional</sup> <a name="TempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputDatabaseInputDefinitionTempDirectory TempDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `DatabaseTableName`<sup>Required</sup> <a name="DatabaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName"></a>

```csharp
public string DatabaseTableName { get; }
```

- *Type:* string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputDatabaseInputDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputDatabaseInputDefinitionTempDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDataCatalogInputDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory">PutTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory">ResetTempDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTempDirectory` <a name="PutTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory"></a>

```csharp
private void PutTempDirectory(DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTempDirectory` <a name="ResetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory"></a>

```csharp
private void ResetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput">TempDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory"></a>

```csharp
public DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference TempDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TempDirectoryInput`<sup>Optional</sup> <a name="TempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory TempDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputMetadataOutputReference <a name="DatabrewDatasetInputMetadataOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---


### DatabrewDatasetInputOutputReference <a name="DatabrewDatasetInputOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition">PutDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition">PutDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition">PutS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition">ResetDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition">ResetDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition">ResetS3InputDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseInputDefinition` <a name="PutDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition"></a>

```csharp
private void PutDatabaseInputDefinition(DatabrewDatasetInputDatabaseInputDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `PutDataCatalogInputDefinition` <a name="PutDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition"></a>

```csharp
private void PutDataCatalogInputDefinition(DatabrewDatasetInputDataCatalogInputDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata"></a>

```csharp
private void PutMetadata(DatabrewDatasetInputMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `PutS3InputDefinition` <a name="PutS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition"></a>

```csharp
private void PutS3InputDefinition(DatabrewDatasetInputS3InputDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `ResetDatabaseInputDefinition` <a name="ResetDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition"></a>

```csharp
private void ResetDatabaseInputDefinition()
```

##### `ResetDataCatalogInputDefinition` <a name="ResetDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition"></a>

```csharp
private void ResetDataCatalogInputDefinition()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetS3InputDefinition` <a name="ResetS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition"></a>

```csharp
private void ResetS3InputDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition">DatabaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition">DataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition">S3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput">DatabaseInputDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput">DataCatalogInputDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput">S3InputDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInputDefinition`<sup>Required</sup> <a name="DatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition"></a>

```csharp
public DatabrewDatasetInputDatabaseInputDefinitionOutputReference DatabaseInputDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a>

---

##### `DataCatalogInputDefinition`<sup>Required</sup> <a name="DataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition"></a>

```csharp
public DatabrewDatasetInputDataCatalogInputDefinitionOutputReference DataCatalogInputDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata"></a>

```csharp
public DatabrewDatasetInputMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a>

---

##### `S3InputDefinition`<sup>Required</sup> <a name="S3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition"></a>

```csharp
public DatabrewDatasetInputS3InputDefinitionOutputReference S3InputDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a>

---

##### `DatabaseInputDefinitionInput`<sup>Optional</sup> <a name="DatabaseInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputDatabaseInputDefinition DatabaseInputDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `DataCatalogInputDefinitionInput`<sup>Optional</sup> <a name="DataCatalogInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinition DataCatalogInputDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputMetadata MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `S3InputDefinitionInput`<sup>Optional</sup> <a name="S3InputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput"></a>

```csharp
public IResolvable|DatabrewDatasetInputS3InputDefinition S3InputDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---


### DatabrewDatasetInputS3InputDefinitionOutputReference <a name="DatabrewDatasetInputS3InputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetInputS3InputDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetInputS3InputDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---


### DatabrewDatasetPathOptionsFilesLimitOutputReference <a name="DatabrewDatasetPathOptionsFilesLimitOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsFilesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles">ResetMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy">ResetOrderedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxFiles` <a name="ResetMaxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles"></a>

```csharp
private void ResetMaxFiles()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetOrderedBy` <a name="ResetOrderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy"></a>

```csharp
private void ResetOrderedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput">MaxFilesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput">OrderedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles">MaxFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy">OrderedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxFilesInput`<sup>Optional</sup> <a name="MaxFilesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput"></a>

```csharp
public double MaxFilesInput { get; }
```

- *Type:* double

---

##### `OrderedByInput`<sup>Optional</sup> <a name="OrderedByInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput"></a>

```csharp
public string OrderedByInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `MaxFiles`<sup>Required</sup> <a name="MaxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles"></a>

```csharp
public double MaxFiles { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `OrderedBy`<sup>Required</sup> <a name="OrderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy"></a>

```csharp
public string OrderedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsFilesLimit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap">PutValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap">ResetValuesMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValuesMap` <a name="PutValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap"></a>

```csharp
private void PutValuesMap(IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetValuesMap` <a name="ResetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap"></a>

```csharp
private void ResetValuesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap">ValuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput">ValuesMapInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesMap`<sup>Required</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap"></a>

```csharp
public DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList ValuesMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ValuesMapInput`<sup>Optional</sup> <a name="ValuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] ValuesMapInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get"></a>

```csharp
private DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>[]

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference">ResetValueReference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueReference` <a name="ResetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference"></a>

```csharp
private void ResetValueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput">ValueReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference">ValueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueReferenceInput`<sup>Optional</sup> <a name="ValueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput"></a>

```csharp
public string ValueReferenceInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueReference`<sup>Required</sup> <a name="ValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference"></a>

```csharp
public string ValueReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>

---


### DatabrewDatasetPathOptionsOutputReference <a name="DatabrewDatasetPathOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit">PutFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition">PutLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit">ResetFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition">ResetLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilesLimit` <a name="PutFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit"></a>

```csharp
private void PutFilesLimit(DatabrewDatasetPathOptionsFilesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `PutLastModifiedDateCondition` <a name="PutLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition"></a>

```csharp
private void PutLastModifiedDateCondition(DatabrewDatasetPathOptionsLastModifiedDateCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|DatabrewDatasetPathOptionsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---

##### `ResetFilesLimit` <a name="ResetFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit"></a>

```csharp
private void ResetFilesLimit()
```

##### `ResetLastModifiedDateCondition` <a name="ResetLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition"></a>

```csharp
private void ResetLastModifiedDateCondition()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit">FilesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition">LastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput">FilesLimitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput">LastModifiedDateConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesLimit`<sup>Required</sup> <a name="FilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit"></a>

```csharp
public DatabrewDatasetPathOptionsFilesLimitOutputReference FilesLimit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a>

---

##### `LastModifiedDateCondition`<sup>Required</sup> <a name="LastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition"></a>

```csharp
public DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference LastModifiedDateCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters"></a>

```csharp
public DatabrewDatasetPathOptionsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a>

---

##### `FilesLimitInput`<sup>Optional</sup> <a name="FilesLimitInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsFilesLimit FilesLimitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `LastModifiedDateConditionInput`<sup>Optional</sup> <a name="LastModifiedDateConditionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateCondition LastModifiedDateConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode">ResetLocaleCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset">ResetTimezoneOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetLocaleCode` <a name="ResetLocaleCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode"></a>

```csharp
private void ResetLocaleCode()
```

##### `ResetTimezoneOffset` <a name="ResetTimezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset"></a>

```csharp
private void ResetTimezoneOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput">LocaleCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput">TimezoneOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode">LocaleCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset">TimezoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `LocaleCodeInput`<sup>Optional</sup> <a name="LocaleCodeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput"></a>

```csharp
public string LocaleCodeInput { get; }
```

- *Type:* string

---

##### `TimezoneOffsetInput`<sup>Optional</sup> <a name="TimezoneOffsetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput"></a>

```csharp
public string TimezoneOffsetInput { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `LocaleCode`<sup>Required</sup> <a name="LocaleCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode"></a>

```csharp
public string LocaleCode { get; }
```

- *Type:* string

---

##### `TimezoneOffset`<sup>Required</sup> <a name="TimezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset"></a>

```csharp
public string TimezoneOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap">PutValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap">ResetValuesMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValuesMap` <a name="PutValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap"></a>

```csharp
private void PutValuesMap(IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetValuesMap` <a name="ResetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap"></a>

```csharp
private void ResetValuesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap">ValuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput">ValuesMapInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesMap`<sup>Required</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList ValuesMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ValuesMapInput`<sup>Optional</sup> <a name="ValuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] ValuesMapInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get"></a>

```csharp
private DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>[]

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference">ResetValueReference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueReference` <a name="ResetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference"></a>

```csharp
private void ResetValueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput">ValueReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference">ValueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueReferenceInput`<sup>Optional</sup> <a name="ValueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput"></a>

```csharp
public string ValueReferenceInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueReference`<sup>Required</sup> <a name="ValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference"></a>

```csharp
public string ValueReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions">PutDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn">ResetCreateColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions">ResetDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatetimeOptions` <a name="PutDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions"></a>

```csharp
private void PutDatetimeOptions(DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter"></a>

```csharp
private void PutFilter(DatabrewDatasetPathOptionsParametersDatasetParameterFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `ResetCreateColumn` <a name="ResetCreateColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn"></a>

```csharp
private void ResetCreateColumn()
```

##### `ResetDatetimeOptions` <a name="ResetDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions"></a>

```csharp
private void ResetDatetimeOptions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions">DatetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput">CreateColumnInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput">DatetimeOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn">CreateColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatetimeOptions`<sup>Required</sup> <a name="DatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference DatetimeOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a>

---

##### `CreateColumnInput`<sup>Optional</sup> <a name="CreateColumnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput"></a>

```csharp
public bool|IResolvable CreateColumnInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatetimeOptionsInput`<sup>Optional</sup> <a name="DatetimeOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions DatetimeOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CreateColumn`<sup>Required</sup> <a name="CreateColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn"></a>

```csharp
public bool|IResolvable CreateColumn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---


### DatabrewDatasetPathOptionsParametersList <a name="DatabrewDatasetPathOptionsParametersList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get"></a>

```csharp
private DatabrewDatasetPathOptionsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>[]

---


### DatabrewDatasetPathOptionsParametersOutputReference <a name="DatabrewDatasetPathOptionsParametersOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetPathOptionsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter">PutDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter">ResetDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName">ResetPathParameterName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetParameter` <a name="PutDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter"></a>

```csharp
private void PutDatasetParameter(DatabrewDatasetPathOptionsParametersDatasetParameter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `ResetDatasetParameter` <a name="ResetDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter"></a>

```csharp
private void ResetDatasetParameter()
```

##### `ResetPathParameterName` <a name="ResetPathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName"></a>

```csharp
private void ResetPathParameterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter">DatasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput">DatasetParameterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput">PathParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName">PathParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParameter`<sup>Required</sup> <a name="DatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter"></a>

```csharp
public DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference DatasetParameter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a>

---

##### `DatasetParameterInput`<sup>Optional</sup> <a name="DatasetParameterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameter DatasetParameterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `PathParameterNameInput`<sup>Optional</sup> <a name="PathParameterNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput"></a>

```csharp
public string PathParameterNameInput { get; }
```

- *Type:* string

---

##### `PathParameterName`<sup>Required</sup> <a name="PathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName"></a>

```csharp
public string PathParameterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetPathOptionsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>

---


### DatabrewDatasetTagsList <a name="DatabrewDatasetTagsList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get"></a>

```csharp
private DatabrewDatasetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>[]

---


### DatabrewDatasetTagsOutputReference <a name="DatabrewDatasetTagsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatabrewDatasetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabrewDatasetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>

---



