# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktn/provider-awscc.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier awscc_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifier(Construct Scope, string Id, GlueClassifierConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier">PutCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier">PutGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier">PutJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier">PutXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier">ResetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier">ResetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier">ResetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier">ResetXmlClassifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsvClassifier` <a name="PutCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```csharp
private void PutCsvClassifier(GlueClassifierCsvClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `PutGrokClassifier` <a name="PutGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```csharp
private void PutGrokClassifier(GlueClassifierGrokClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `PutJsonClassifier` <a name="PutJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```csharp
private void PutJsonClassifier(GlueClassifierJsonClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `PutXmlClassifier` <a name="PutXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```csharp
private void PutXmlClassifier(GlueClassifierXmlClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `ResetCsvClassifier` <a name="ResetCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```csharp
private void ResetCsvClassifier()
```

##### `ResetGrokClassifier` <a name="ResetGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```csharp
private void ResetGrokClassifier()
```

##### `ResetJsonClassifier` <a name="ResetJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```csharp
private void ResetJsonClassifier()
```

##### `ResetXmlClassifier` <a name="ResetXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```csharp
private void ResetXmlClassifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueClassifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueClassifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueClassifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueClassifier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueClassifier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput">CsvClassifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput">GrokClassifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput">JsonClassifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput">XmlClassifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CsvClassifier`<sup>Required</sup> <a name="CsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```csharp
public GlueClassifierCsvClassifierOutputReference CsvClassifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `GrokClassifier`<sup>Required</sup> <a name="GrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```csharp
public GlueClassifierGrokClassifierOutputReference GrokClassifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JsonClassifier`<sup>Required</sup> <a name="JsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```csharp
public GlueClassifierJsonClassifierOutputReference JsonClassifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `XmlClassifier`<sup>Required</sup> <a name="XmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```csharp
public GlueClassifierXmlClassifierOutputReference XmlClassifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `CsvClassifierInput`<sup>Optional</sup> <a name="CsvClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```csharp
public IResolvable|GlueClassifierCsvClassifier CsvClassifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `GrokClassifierInput`<sup>Optional</sup> <a name="GrokClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```csharp
public IResolvable|GlueClassifierGrokClassifier GrokClassifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `JsonClassifierInput`<sup>Optional</sup> <a name="JsonClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```csharp
public IResolvable|GlueClassifierJsonClassifier JsonClassifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `XmlClassifierInput`<sup>Optional</sup> <a name="XmlClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```csharp
public IResolvable|GlueClassifierXmlClassifier XmlClassifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GlueClassifierCsvClassifier CsvClassifier = null,
    GlueClassifierGrokClassifier GrokClassifier = null,
    GlueClassifierJsonClassifier JsonClassifier = null,
    GlueClassifierXmlClassifier XmlClassifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | A classifier that uses grok. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | A classifier for JSON content. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | A classifier for XML content. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CsvClassifier`<sup>Optional</sup> <a name="CsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```csharp
public GlueClassifierCsvClassifier CsvClassifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

A classifier for comma-separated values (CSV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `GrokClassifier`<sup>Optional</sup> <a name="GrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```csharp
public GlueClassifierGrokClassifier GrokClassifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

A classifier that uses grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `JsonClassifier`<sup>Optional</sup> <a name="JsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```csharp
public GlueClassifierJsonClassifier JsonClassifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

A classifier for JSON content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `XmlClassifier`<sup>Optional</sup> <a name="XmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```csharp
public GlueClassifierXmlClassifier XmlClassifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

A classifier for XML content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierCsvClassifier {
    bool|IResolvable AllowSingleColumn = null,
    string[] ContainsCustomDatatype = null,
    string ContainsHeader = null,
    bool|IResolvable CustomDatatypeConfigured = null,
    string Delimiter = null,
    bool|IResolvable DisableValueTrimming = null,
    string[] Header = null,
    string Name = null,
    string QuoteSymbol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables the processing of files that contain only one column. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype">ContainsCustomDatatype</a></code> | <code>string[]</code> | Indicates whether the CSV file contains custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">ContainsHeader</a></code> | <code>string</code> | Indicates whether the CSV file contains a header. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables the configuration of custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">Delimiter</a></code> | <code>string</code> | A custom symbol to denote what separates each column entry in the row. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies not to trim values before identifying the type of column values. The default value is true. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header">Header</a></code> | <code>string[]</code> | A list of strings representing column names. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name">Name</a></code> | <code>string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">QuoteSymbol</a></code> | <code>string</code> | A custom symbol to denote what combines content into a single column value. |

---

##### `AllowSingleColumn`<sup>Optional</sup> <a name="AllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```csharp
public bool|IResolvable AllowSingleColumn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables the processing of files that contain only one column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}

---

##### `ContainsCustomDatatype`<sup>Optional</sup> <a name="ContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype"></a>

```csharp
public string[] ContainsCustomDatatype { get; set; }
```

- *Type:* string[]

Indicates whether the CSV file contains custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#contains_custom_datatype GlueClassifier#contains_custom_datatype}

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```csharp
public string ContainsHeader { get; set; }
```

- *Type:* string

Indicates whether the CSV file contains a header.

A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}

---

##### `CustomDatatypeConfigured`<sup>Optional</sup> <a name="CustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```csharp
public bool|IResolvable CustomDatatypeConfigured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables the configuration of custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

A custom symbol to denote what separates each column entry in the row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}

---

##### `DisableValueTrimming`<sup>Optional</sup> <a name="DisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```csharp
public bool|IResolvable DisableValueTrimming { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies not to trim values before identifying the type of column values. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```csharp
public string[] Header { get; set; }
```

- *Type:* string[]

A list of strings representing column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#header GlueClassifier#header}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `QuoteSymbol`<sup>Optional</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```csharp
public string QuoteSymbol { get; set; }
```

- *Type:* string

A custom symbol to denote what combines content into a single column value.

It must be different from the column delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierGrokClassifier {
    string Classification = null,
    string CustomPatterns = null,
    string GrokPattern = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification">Classification</a></code> | <code>string</code> | An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">CustomPatterns</a></code> | <code>string</code> | Optional custom grok patterns defined by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">GrokPattern</a></code> | <code>string</code> | The grok pattern applied to a data store by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name">Name</a></code> | <code>string</code> | The name of the classifier. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `CustomPatterns`<sup>Optional</sup> <a name="CustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```csharp
public string CustomPatterns { get; set; }
```

- *Type:* string

Optional custom grok patterns defined by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}

---

##### `GrokPattern`<sup>Optional</sup> <a name="GrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```csharp
public string GrokPattern { get; set; }
```

- *Type:* string

The grok pattern applied to a data store by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierJsonClassifier {
    string JsonPath = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">JsonPath</a></code> | <code>string</code> | A JsonPath string defining the JSON data for the classifier to classify. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name">Name</a></code> | <code>string</code> | The name of the classifier. |

---

##### `JsonPath`<sup>Optional</sup> <a name="JsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```csharp
public string JsonPath { get; set; }
```

- *Type:* string

A JsonPath string defining the JSON data for the classifier to classify.

AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierXmlClassifier {
    string Classification = null,
    string Name = null,
    string RowTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification">Classification</a></code> | <code>string</code> | An identifier of the data format that the classifier matches. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name">Name</a></code> | <code>string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">RowTag</a></code> | <code>string</code> | The XML tag designating the element that contains each record in an XML document being parsed. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

An identifier of the data format that the classifier matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `RowTag`<sup>Optional</sup> <a name="RowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```csharp
public string RowTag { get; set; }
```

- *Type:* string

The XML tag designating the element that contains each record in an XML document being parsed.

This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierCsvClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">ResetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype">ResetContainsCustomDatatype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">ResetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">ResetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">ResetQuoteSymbol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSingleColumn` <a name="ResetAllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```csharp
private void ResetAllowSingleColumn()
```

##### `ResetContainsCustomDatatype` <a name="ResetContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype"></a>

```csharp
private void ResetContainsCustomDatatype()
```

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```csharp
private void ResetContainsHeader()
```

##### `ResetCustomDatatypeConfigured` <a name="ResetCustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```csharp
private void ResetCustomDatatypeConfigured()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetDisableValueTrimming` <a name="ResetDisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```csharp
private void ResetDisableValueTrimming()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetQuoteSymbol` <a name="ResetQuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```csharp
private void ResetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">AllowSingleColumnInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput">ContainsCustomDatatypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">CustomDatatypeConfiguredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">DisableValueTrimmingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">HeaderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">QuoteSymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype">ContainsCustomDatatype</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">Header</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">QuoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowSingleColumnInput`<sup>Optional</sup> <a name="AllowSingleColumnInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```csharp
public bool|IResolvable AllowSingleColumnInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContainsCustomDatatypeInput`<sup>Optional</sup> <a name="ContainsCustomDatatypeInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput"></a>

```csharp
public string[] ContainsCustomDatatypeInput { get; }
```

- *Type:* string[]

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```csharp
public string ContainsHeaderInput { get; }
```

- *Type:* string

---

##### `CustomDatatypeConfiguredInput`<sup>Optional</sup> <a name="CustomDatatypeConfiguredInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```csharp
public bool|IResolvable CustomDatatypeConfiguredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `DisableValueTrimmingInput`<sup>Optional</sup> <a name="DisableValueTrimmingInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```csharp
public bool|IResolvable DisableValueTrimmingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```csharp
public string[] HeaderInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QuoteSymbolInput`<sup>Optional</sup> <a name="QuoteSymbolInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```csharp
public string QuoteSymbolInput { get; }
```

- *Type:* string

---

##### `AllowSingleColumn`<sup>Required</sup> <a name="AllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```csharp
public bool|IResolvable AllowSingleColumn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContainsCustomDatatype`<sup>Required</sup> <a name="ContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype"></a>

```csharp
public string[] ContainsCustomDatatype { get; }
```

- *Type:* string[]

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```csharp
public string ContainsHeader { get; }
```

- *Type:* string

---

##### `CustomDatatypeConfigured`<sup>Required</sup> <a name="CustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```csharp
public bool|IResolvable CustomDatatypeConfigured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `DisableValueTrimming`<sup>Required</sup> <a name="DisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```csharp
public bool|IResolvable DisableValueTrimming { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```csharp
public string[] Header { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QuoteSymbol`<sup>Required</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```csharp
public string QuoteSymbol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueClassifierCsvClassifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierGrokClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">ResetCustomPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern">ResetGrokPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification"></a>

```csharp
private void ResetClassification()
```

##### `ResetCustomPatterns` <a name="ResetCustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```csharp
private void ResetCustomPatterns()
```

##### `ResetGrokPattern` <a name="ResetGrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern"></a>

```csharp
private void ResetGrokPattern()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">CustomPatternsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">GrokPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">CustomPatterns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">GrokPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `CustomPatternsInput`<sup>Optional</sup> <a name="CustomPatternsInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```csharp
public string CustomPatternsInput { get; }
```

- *Type:* string

---

##### `GrokPatternInput`<sup>Optional</sup> <a name="GrokPatternInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```csharp
public string GrokPatternInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `CustomPatterns`<sup>Required</sup> <a name="CustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```csharp
public string CustomPatterns { get; }
```

- *Type:* string

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```csharp
public string GrokPattern { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueClassifierGrokClassifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierJsonClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath">ResetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonPath` <a name="ResetJsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath"></a>

```csharp
private void ResetJsonPath()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">JsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```csharp
public string JsonPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```csharp
public string JsonPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueClassifierJsonClassifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueClassifierXmlClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag">ResetRowTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification"></a>

```csharp
private void ResetClassification()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRowTag` <a name="ResetRowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag"></a>

```csharp
private void ResetRowTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">RowTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">RowTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RowTagInput`<sup>Optional</sup> <a name="RowTagInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```csharp
public string RowTagInput { get; }
```

- *Type:* string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```csharp
public string RowTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueClassifierXmlClassifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



