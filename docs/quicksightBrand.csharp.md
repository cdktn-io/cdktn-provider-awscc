# `quicksightBrand` Submodule <a name="`quicksightBrand` Submodule" id="@cdktn/provider-awscc.quicksightBrand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightBrand <a name="QuicksightBrand" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand awscc_quicksight_brand}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrand(Construct Scope, string Id, QuicksightBrandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig">QuicksightBrandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig">QuicksightBrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putBrandDefinition">PutBrandDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetBrandDefinition">ResetBrandDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrandDefinition` <a name="PutBrandDefinition" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putBrandDefinition"></a>

```csharp
private void PutBrandDefinition(QuicksightBrandBrandDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putBrandDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightBrandTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]

---

##### `ResetBrandDefinition` <a name="ResetBrandDefinition" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetBrandDefinition"></a>

```csharp
private void ResetBrandDefinition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightBrand resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightBrand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightBrand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightBrand.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightBrand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightBrand resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightBrand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightBrand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightBrand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandDefinition">BrandDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference">QuicksightBrandBrandDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandStatus">BrandStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList">QuicksightBrandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.versionStatus">VersionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandDefinitionInput">BrandDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `BrandDefinition`<sup>Required</sup> <a name="BrandDefinition" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandDefinition"></a>

```csharp
public QuicksightBrandBrandDefinitionOutputReference BrandDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference">QuicksightBrandBrandDefinitionOutputReference</a>

---

##### `BrandStatus`<sup>Required</sup> <a name="BrandStatus" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandStatus"></a>

```csharp
public string BrandStatus { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tags"></a>

```csharp
public QuicksightBrandTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList">QuicksightBrandTagsList</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.versionStatus"></a>

```csharp
public string VersionStatus { get; }
```

- *Type:* string

---

##### `BrandDefinitionInput`<sup>Optional</sup> <a name="BrandDefinitionInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandDefinitionInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinition BrandDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightBrandTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightBrandBrandDefinition <a name="QuicksightBrandBrandDefinition" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinition {
    QuicksightBrandBrandDefinitionApplicationTheme ApplicationTheme = null,
    string BrandName = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.applicationTheme">ApplicationTheme</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a></code> | The application theme. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.brandName">BrandName</a></code> | <code>string</code> | The name of the brand. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.description">Description</a></code> | <code>string</code> | The description of the brand. |

---

##### `ApplicationTheme`<sup>Optional</sup> <a name="ApplicationTheme" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.applicationTheme"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationTheme ApplicationTheme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a>

The application theme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#application_theme QuicksightBrand#application_theme}

---

##### `BrandName`<sup>Optional</sup> <a name="BrandName" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.brandName"></a>

```csharp
public string BrandName { get; set; }
```

- *Type:* string

The name of the brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_name QuicksightBrand#brand_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#description QuicksightBrand#description}

---

### QuicksightBrandBrandDefinitionApplicationTheme <a name="QuicksightBrandBrandDefinitionApplicationTheme" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationTheme {
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette BrandColorPalette = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle BrandElementStyle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme.property.brandColorPalette">BrandColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | The color palette. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme.property.brandElementStyle">BrandElementStyle</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | The element style. |

---

##### `BrandColorPalette`<sup>Optional</sup> <a name="BrandColorPalette" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme.property.brandColorPalette"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette BrandColorPalette { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

The color palette.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_color_palette QuicksightBrand#brand_color_palette}

---

##### `BrandElementStyle`<sup>Optional</sup> <a name="BrandElementStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme.property.brandElementStyle"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle BrandElementStyle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

The element style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_element_style QuicksightBrand#brand_element_style}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette {
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent Accent = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger Danger = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension Dimension = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo Info = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure Measure = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary Primary = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary Secondary = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess Success = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning Warning = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.accent">Accent</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.danger">Danger</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.measure">Measure</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.success">Success</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.warning">Warning</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | The palette colors. |

---

##### `Accent`<sup>Optional</sup> <a name="Accent" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.accent"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent Accent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#accent QuicksightBrand#accent}

---

##### `Danger`<sup>Optional</sup> <a name="Danger" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.danger"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger Danger { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#danger QuicksightBrand#danger}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.dimension"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#dimension QuicksightBrand#dimension}

---

##### `Info`<sup>Optional</sup> <a name="Info" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.info"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo Info { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#info QuicksightBrand#info}

---

##### `Measure`<sup>Optional</sup> <a name="Measure" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.measure"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure Measure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#measure QuicksightBrand#measure}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.primary"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#primary QuicksightBrand#primary}

---

##### `Secondary`<sup>Optional</sup> <a name="Secondary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.secondary"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary Secondary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#secondary QuicksightBrand#secondary}

---

##### `Success`<sup>Optional</sup> <a name="Success" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.success"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess Success { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#success QuicksightBrand#success}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.property.warning"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning Warning { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#warning QuicksightBrand#warning}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle {
    QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle NavbarStyle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.property.navbarStyle">NavbarStyle</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | The navigation bar style. |

---

##### `NavbarStyle`<sup>Optional</sup> <a name="NavbarStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.property.navbarStyle"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle NavbarStyle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

The navigation bar style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#navbar_style QuicksightBrand#navbar_style}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle {
    QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar ContextualNavbar = null,
    QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar GlobalNavbar = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.property.contextualNavbar">ContextualNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | The palette colors. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.property.globalNavbar">GlobalNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | The palette colors. |

---

##### `ContextualNavbar`<sup>Optional</sup> <a name="ContextualNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.property.contextualNavbar"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar ContextualNavbar { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#contextual_navbar QuicksightBrand#contextual_navbar}

---

##### `GlobalNavbar`<sup>Optional</sup> <a name="GlobalNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.property.globalNavbar"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar GlobalNavbar { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

The palette colors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#global_navbar QuicksightBrand#global_navbar}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar {
    string Background = null,
    string Foreground = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.property.background">Background</a></code> | <code>string</code> | The background color. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.property.foreground">Foreground</a></code> | <code>string</code> | The foreground color. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.property.background"></a>

```csharp
public string Background { get; set; }
```

- *Type:* string

The background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background QuicksightBrand#background}

---

##### `Foreground`<sup>Optional</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.property.foreground"></a>

```csharp
public string Foreground { get; set; }
```

- *Type:* string

The foreground color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}

---

### QuicksightBrandConfig <a name="QuicksightBrandConfig" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BrandId,
    QuicksightBrandBrandDefinition BrandDefinition = null,
    IResolvable|QuicksightBrandTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.brandId">BrandId</a></code> | <code>string</code> | The ID of the QuickSight brand. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.brandDefinition">BrandDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_definition QuicksightBrand#brand_definition}. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]</code> | The tags for the brand. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

The ID of the QuickSight brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_id QuicksightBrand#brand_id}

---

##### `BrandDefinition`<sup>Optional</sup> <a name="BrandDefinition" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.brandDefinition"></a>

```csharp
public QuicksightBrandBrandDefinition BrandDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_definition QuicksightBrand#brand_definition}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightBrandTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]

The tags for the brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#tags QuicksightBrand#tags}

---

### QuicksightBrandTags <a name="QuicksightBrandTags" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags.property.key">Key</a></code> | <code>string</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags.property.value">Value</a></code> | <code>string</code> | Tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#key QuicksightBrand#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#value QuicksightBrand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putAccent">PutAccent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDanger">PutDanger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putInfo">PutInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putMeasure">PutMeasure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSecondary">PutSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSuccess">PutSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetAccent">ResetAccent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetDanger">ResetDanger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetInfo">ResetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetMeasure">ResetMeasure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetSecondary">ResetSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetSuccess">ResetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccent` <a name="PutAccent" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putAccent"></a>

```csharp
private void PutAccent(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putAccent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---

##### `PutDanger` <a name="PutDanger" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDanger"></a>

```csharp
private void PutDanger(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDanger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDimension"></a>

```csharp
private void PutDimension(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---

##### `PutInfo` <a name="PutInfo" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putInfo"></a>

```csharp
private void PutInfo(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---

##### `PutMeasure` <a name="PutMeasure" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putMeasure"></a>

```csharp
private void PutMeasure(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putMeasure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---

##### `PutSecondary` <a name="PutSecondary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSecondary"></a>

```csharp
private void PutSecondary(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSecondary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---

##### `PutSuccess` <a name="PutSuccess" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSuccess"></a>

```csharp
private void PutSuccess(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putWarning"></a>

```csharp
private void PutWarning(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---

##### `ResetAccent` <a name="ResetAccent" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetAccent"></a>

```csharp
private void ResetAccent()
```

##### `ResetDanger` <a name="ResetDanger" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetDanger"></a>

```csharp
private void ResetDanger()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetInfo` <a name="ResetInfo" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetInfo"></a>

```csharp
private void ResetInfo()
```

##### `ResetMeasure` <a name="ResetMeasure" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetMeasure"></a>

```csharp
private void ResetMeasure()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetSecondary` <a name="ResetSecondary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetSecondary"></a>

```csharp
private void ResetSecondary()
```

##### `ResetSuccess` <a name="ResetSuccess" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetSuccess"></a>

```csharp
private void ResetSuccess()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resetWarning"></a>

```csharp
private void ResetWarning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent">Accent</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger">Danger</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure">Measure</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning">Warning</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accentInput">AccentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dangerInput">DangerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.infoInput">InfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measureInput">MeasureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondaryInput">SecondaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.successInput">SuccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warningInput">WarningInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accent`<sup>Required</sup> <a name="Accent" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference Accent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a>

---

##### `Danger`<sup>Required</sup> <a name="Danger" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference Danger { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a>

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference Info { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a>

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference Measure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference Secondary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference Success { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference Warning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a>

---

##### `AccentInput`<sup>Optional</sup> <a name="AccentInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accentInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent AccentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---

##### `DangerInput`<sup>Optional</sup> <a name="DangerInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dangerInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger DangerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimensionInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension DimensionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---

##### `InfoInput`<sup>Optional</sup> <a name="InfoInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.infoInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo InfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---

##### `MeasureInput`<sup>Optional</sup> <a name="MeasureInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measureInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure MeasureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primaryInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary PrimaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---

##### `SecondaryInput`<sup>Optional</sup> <a name="SecondaryInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondaryInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary SecondaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---

##### `SuccessInput`<sup>Optional</sup> <a name="SuccessInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.successInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess SuccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warningInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning WarningInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resetForeground">ResetForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resetBackground"></a>

```csharp
private void ResetBackground()
```

##### `ResetForeground` <a name="ResetForeground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resetForeground"></a>

```csharp
private void ResetForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foregroundInput">ForegroundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.backgroundInput"></a>

```csharp
public string BackgroundInput { get; }
```

- *Type:* string

---

##### `ForegroundInput`<sup>Optional</sup> <a name="ForegroundInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foregroundInput"></a>

```csharp
public string ForegroundInput { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putContextualNavbar">PutContextualNavbar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putGlobalNavbar">PutGlobalNavbar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resetContextualNavbar">ResetContextualNavbar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resetGlobalNavbar">ResetGlobalNavbar</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContextualNavbar` <a name="PutContextualNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putContextualNavbar"></a>

```csharp
private void PutContextualNavbar(QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putContextualNavbar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---

##### `PutGlobalNavbar` <a name="PutGlobalNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putGlobalNavbar"></a>

```csharp
private void PutGlobalNavbar(QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.putGlobalNavbar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---

##### `ResetContextualNavbar` <a name="ResetContextualNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resetContextualNavbar"></a>

```csharp
private void ResetContextualNavbar()
```

##### `ResetGlobalNavbar` <a name="ResetGlobalNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resetGlobalNavbar"></a>

```csharp
private void ResetGlobalNavbar()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar">ContextualNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar">GlobalNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbarInput">ContextualNavbarInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbarInput">GlobalNavbarInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextualNavbar`<sup>Required</sup> <a name="ContextualNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference ContextualNavbar { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a>

---

##### `GlobalNavbar`<sup>Required</sup> <a name="GlobalNavbar" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference GlobalNavbar { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a>

---

##### `ContextualNavbarInput`<sup>Optional</sup> <a name="ContextualNavbarInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbarInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar ContextualNavbarInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---

##### `GlobalNavbarInput`<sup>Optional</sup> <a name="GlobalNavbarInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbarInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar GlobalNavbarInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.putNavbarStyle">PutNavbarStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resetNavbarStyle">ResetNavbarStyle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNavbarStyle` <a name="PutNavbarStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.putNavbarStyle"></a>

```csharp
private void PutNavbarStyle(QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.putNavbarStyle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---

##### `ResetNavbarStyle` <a name="ResetNavbarStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resetNavbarStyle"></a>

```csharp
private void ResetNavbarStyle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle">NavbarStyle</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyleInput">NavbarStyleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NavbarStyle`<sup>Required</sup> <a name="NavbarStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference NavbarStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a>

---

##### `NavbarStyleInput`<sup>Optional</sup> <a name="NavbarStyleInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyleInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle NavbarStyleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---


### QuicksightBrandBrandDefinitionApplicationThemeOutputReference <a name="QuicksightBrandBrandDefinitionApplicationThemeOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionApplicationThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandColorPalette">PutBrandColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandElementStyle">PutBrandElementStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resetBrandColorPalette">ResetBrandColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resetBrandElementStyle">ResetBrandElementStyle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBrandColorPalette` <a name="PutBrandColorPalette" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandColorPalette"></a>

```csharp
private void PutBrandColorPalette(QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandColorPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---

##### `PutBrandElementStyle` <a name="PutBrandElementStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandElementStyle"></a>

```csharp
private void PutBrandElementStyle(QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.putBrandElementStyle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---

##### `ResetBrandColorPalette` <a name="ResetBrandColorPalette" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resetBrandColorPalette"></a>

```csharp
private void ResetBrandColorPalette()
```

##### `ResetBrandElementStyle` <a name="ResetBrandElementStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.resetBrandElementStyle"></a>

```csharp
private void ResetBrandElementStyle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette">BrandColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle">BrandElementStyle</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPaletteInput">BrandColorPaletteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyleInput">BrandElementStyleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrandColorPalette`<sup>Required</sup> <a name="BrandColorPalette" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference BrandColorPalette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a>

---

##### `BrandElementStyle`<sup>Required</sup> <a name="BrandElementStyle" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference BrandElementStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a>

---

##### `BrandColorPaletteInput`<sup>Optional</sup> <a name="BrandColorPaletteInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPaletteInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette BrandColorPaletteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---

##### `BrandElementStyleInput`<sup>Optional</sup> <a name="BrandElementStyleInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyleInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle BrandElementStyleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationTheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a>

---


### QuicksightBrandBrandDefinitionOutputReference <a name="QuicksightBrandBrandDefinitionOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandBrandDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.putApplicationTheme">PutApplicationTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetApplicationTheme">ResetApplicationTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetBrandName">ResetBrandName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationTheme` <a name="PutApplicationTheme" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.putApplicationTheme"></a>

```csharp
private void PutApplicationTheme(QuicksightBrandBrandDefinitionApplicationTheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.putApplicationTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a>

---

##### `ResetApplicationTheme` <a name="ResetApplicationTheme" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetApplicationTheme"></a>

```csharp
private void ResetApplicationTheme()
```

##### `ResetBrandName` <a name="ResetBrandName" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetBrandName"></a>

```csharp
private void ResetBrandName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.applicationTheme">ApplicationTheme</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference">QuicksightBrandBrandDefinitionApplicationThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.applicationThemeInput">ApplicationThemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.brandNameInput">BrandNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.brandName">BrandName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationTheme`<sup>Required</sup> <a name="ApplicationTheme" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.applicationTheme"></a>

```csharp
public QuicksightBrandBrandDefinitionApplicationThemeOutputReference ApplicationTheme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationThemeOutputReference">QuicksightBrandBrandDefinitionApplicationThemeOutputReference</a>

---

##### `ApplicationThemeInput`<sup>Optional</sup> <a name="ApplicationThemeInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.applicationThemeInput"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinitionApplicationTheme ApplicationThemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionApplicationTheme">QuicksightBrandBrandDefinitionApplicationTheme</a>

---

##### `BrandNameInput`<sup>Optional</sup> <a name="BrandNameInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.brandNameInput"></a>

```csharp
public string BrandNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `BrandName`<sup>Required</sup> <a name="BrandName" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.brandName"></a>

```csharp
public string BrandName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandBrandDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandBrandDefinition">QuicksightBrandBrandDefinition</a>

---


### QuicksightBrandTagsList <a name="QuicksightBrandTagsList" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.get"></a>

```csharp
private QuicksightBrandTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>[]

---


### QuicksightBrandTagsOutputReference <a name="QuicksightBrandTagsOutputReference" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightBrandTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightBrandTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightBrand.QuicksightBrandTags">QuicksightBrandTags</a>

---



