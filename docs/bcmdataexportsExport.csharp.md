# `bcmdataexportsExport` Submodule <a name="`bcmdataexportsExport` Submodule" id="@cdktn/provider-awscc.bcmdataexportsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmdataexportsExport <a name="BcmdataexportsExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export awscc_bcmdataexports_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExport(Construct Scope, string Id, BcmdataexportsExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExport` <a name="PutExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport"></a>

```csharp
private void PutExport(BcmdataexportsExportExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags"></a>

```csharp
private void PutTags(IResolvable|BcmdataexportsExportTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmdataexportsExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmdataexportsExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmdataexportsExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmdataexportsExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmdataexportsExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmdataexportsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BcmdataexportsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.export">Export</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference">BcmdataexportsExportExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportArn">ExportArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList">BcmdataexportsExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportInput">ExportInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.export"></a>

```csharp
public BcmdataexportsExportExportOutputReference Export { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference">BcmdataexportsExportExportOutputReference</a>

---

##### `ExportArn`<sup>Required</sup> <a name="ExportArn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportArn"></a>

```csharp
public string ExportArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tags"></a>

```csharp
public BcmdataexportsExportTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList">BcmdataexportsExportTagsList</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExport ExportInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput"></a>

```csharp
public IResolvable|BcmdataexportsExportTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmdataexportsExportConfig <a name="BcmdataexportsExportConfig" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BcmdataexportsExportExport Export,
    IResolvable|BcmdataexportsExportTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.export">Export</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.export"></a>

```csharp
public BcmdataexportsExportExport Export { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags"></a>

```csharp
public IResolvable|BcmdataexportsExportTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}.

---

### BcmdataexportsExportExport <a name="BcmdataexportsExportExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExport {
    BcmdataexportsExportExportDataQuery DataQuery,
    BcmdataexportsExportExportDestinationConfigurations DestinationConfigurations,
    string Name,
    BcmdataexportsExportExportRefreshCadence RefreshCadence,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery">DataQuery</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations">DestinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence">RefreshCadence</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}. |

---

##### `DataQuery`<sup>Required</sup> <a name="DataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery"></a>

```csharp
public BcmdataexportsExportExportDataQuery DataQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}.

---

##### `DestinationConfigurations`<sup>Required</sup> <a name="DestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurations DestinationConfigurations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}.

---

##### `RefreshCadence`<sup>Required</sup> <a name="RefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence"></a>

```csharp
public BcmdataexportsExportExportRefreshCadence RefreshCadence { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}.

---

### BcmdataexportsExportExportDataQuery <a name="BcmdataexportsExportExportDataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDataQuery {
    string QueryStatement,
    IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>> TableConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement">QueryStatement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations">TableConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}. |

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement"></a>

```csharp
public string QueryStatement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}.

---

##### `TableConfigurations`<sup>Optional</sup> <a name="TableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>> TableConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}.

---

### BcmdataexportsExportExportDestinationConfigurations <a name="BcmdataexportsExportExportDestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurations {
    BcmdataexportsExportExportDestinationConfigurationsS3Destination S3Destination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}. |

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurationsS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}.

---

### BcmdataexportsExportExportDestinationConfigurationsS3Destination <a name="BcmdataexportsExportExportDestinationConfigurationsS3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurationsS3Destination {
    string S3Bucket,
    BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations S3OutputConfigurations,
    string S3Prefix,
    string S3Region,
    string S3BucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region">S3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_bucket_owner BcmdataexportsExport#s3_bucket_owner}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}.

---

##### `S3OutputConfigurations`<sup>Required</sup> <a name="S3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations S3OutputConfigurations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}.

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}.

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#s3_bucket_owner BcmdataexportsExport#s3_bucket_owner}.

---

### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
    string Compression,
    string Format,
    string OutputType,
    string Overwrite
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression">Compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType">OutputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite">Overwrite</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}. |

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}.

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite"></a>

```csharp
public string Overwrite { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}.

---

### BcmdataexportsExportExportRefreshCadence <a name="BcmdataexportsExportExportRefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportRefreshCadence {
    string Frequency
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}.

---

### BcmdataexportsExportTags <a name="BcmdataexportsExportTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#key BcmdataexportsExport#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#value BcmdataexportsExport#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#key BcmdataexportsExport#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmdataexports_export#value BcmdataexportsExport#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmdataexportsExportExportDataQueryOutputReference <a name="BcmdataexportsExportExportDataQueryOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDataQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations">ResetTableConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableConfigurations` <a name="ResetTableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations"></a>

```csharp
private void ResetTableConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput">QueryStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput">TableConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement">QueryStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations">TableConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryStatementInput`<sup>Optional</sup> <a name="QueryStatementInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput"></a>

```csharp
public string QueryStatementInput { get; }
```

- *Type:* string

---

##### `TableConfigurationsInput`<sup>Optional</sup> <a name="TableConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>> TableConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>>

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement"></a>

```csharp
public string QueryStatement { get; }
```

- *Type:* string

---

##### `TableConfigurations`<sup>Required</sup> <a name="TableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>> TableConfigurations { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, string>>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDataQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

---


### BcmdataexportsExportExportDestinationConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination"></a>

```csharp
private void PutS3Destination(BcmdataexportsExportExportDestinationConfigurationsS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurationsS3Destination S3DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations">PutS3OutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3OutputConfigurations` <a name="PutS3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations"></a>

```csharp
private void PutS3OutputConfigurations(BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

---

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3BucketOwner"></a>

```csharp
private void ResetS3BucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput">S3OutputConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3OutputConfigurations`<sup>Required</sup> <a name="S3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference S3OutputConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3OutputConfigurationsInput`<sup>Optional</sup> <a name="S3OutputConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations S3OutputConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurationsS3Destination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite">Overwrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput"></a>

```csharp
public string OverwriteInput { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite"></a>

```csharp
public string Overwrite { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

---


### BcmdataexportsExportExportOutputReference <a name="BcmdataexportsExportExportOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery">PutDataQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations">PutDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence">PutRefreshCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataQuery` <a name="PutDataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery"></a>

```csharp
private void PutDataQuery(BcmdataexportsExportExportDataQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

---

##### `PutDestinationConfigurations` <a name="PutDestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations"></a>

```csharp
private void PutDestinationConfigurations(BcmdataexportsExportExportDestinationConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

---

##### `PutRefreshCadence` <a name="PutRefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence"></a>

```csharp
private void PutRefreshCadence(BcmdataexportsExportExportRefreshCadence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery">DataQuery</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference">BcmdataexportsExportExportDataQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations">DestinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn">ExportArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence">RefreshCadence</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference">BcmdataexportsExportExportRefreshCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput">DataQueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput">DestinationConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput">RefreshCadenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataQuery`<sup>Required</sup> <a name="DataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery"></a>

```csharp
public BcmdataexportsExportExportDataQueryOutputReference DataQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference">BcmdataexportsExportExportDataQueryOutputReference</a>

---

##### `DestinationConfigurations`<sup>Required</sup> <a name="DestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations"></a>

```csharp
public BcmdataexportsExportExportDestinationConfigurationsOutputReference DestinationConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsOutputReference</a>

---

##### `ExportArn`<sup>Required</sup> <a name="ExportArn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn"></a>

```csharp
public string ExportArn { get; }
```

- *Type:* string

---

##### `RefreshCadence`<sup>Required</sup> <a name="RefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence"></a>

```csharp
public BcmdataexportsExportExportRefreshCadenceOutputReference RefreshCadence { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference">BcmdataexportsExportExportRefreshCadenceOutputReference</a>

---

##### `DataQueryInput`<sup>Optional</sup> <a name="DataQueryInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDataQuery DataQueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationConfigurationsInput`<sup>Optional</sup> <a name="DestinationConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExportDestinationConfigurations DestinationConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RefreshCadenceInput`<sup>Optional</sup> <a name="RefreshCadenceInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput"></a>

```csharp
public IResolvable|BcmdataexportsExportExportRefreshCadence RefreshCadenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExport InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

---


### BcmdataexportsExportExportRefreshCadenceOutputReference <a name="BcmdataexportsExportExportRefreshCadenceOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportExportRefreshCadenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportExportRefreshCadence InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

---


### BcmdataexportsExportTagsList <a name="BcmdataexportsExportTagsList" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get"></a>

```csharp
private BcmdataexportsExportTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>[]

---


### BcmdataexportsExportTagsOutputReference <a name="BcmdataexportsExportTagsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmdataexportsExportTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmdataexportsExportTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags">BcmdataexportsExportTags</a>

---



