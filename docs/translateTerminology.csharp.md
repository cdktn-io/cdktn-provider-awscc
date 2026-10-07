# `translateTerminology` Submodule <a name="`translateTerminology` Submodule" id="@cdktn/provider-awscc.translateTerminology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranslateTerminology <a name="TranslateTerminology" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology awscc_translate_terminology}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminology(Construct Scope, string Id, TranslateTerminologyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig">TranslateTerminologyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig">TranslateTerminologyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData">PutTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy">ResetMergeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData">ResetTerminologyData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey"></a>

```csharp
private void PutEncryptionKey(TranslateTerminologyEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags"></a>

```csharp
private void PutTags(IResolvable|TranslateTerminologyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---

##### `PutTerminologyData` <a name="PutTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData"></a>

```csharp
private void PutTerminologyData(TranslateTerminologyTerminologyData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetMergeStrategy` <a name="ResetMergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy"></a>

```csharp
private void ResetMergeStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminologyData` <a name="ResetTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData"></a>

```csharp
private void ResetTerminologyData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranslateTerminology.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranslateTerminology.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranslateTerminology.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranslateTerminology.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranslateTerminology to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranslateTerminology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TranslateTerminology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality">Directionality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode">SourceLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes">TargetLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount">TermCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData">TerminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput">MergeStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput">TerminologyDataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy">MergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Directionality`<sup>Required</sup> <a name="Directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality"></a>

```csharp
public string Directionality { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey"></a>

```csharp
public TranslateTerminologyEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; }
```

- *Type:* double

---

##### `SourceLanguageCode`<sup>Required</sup> <a name="SourceLanguageCode" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode"></a>

```csharp
public string SourceLanguageCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags"></a>

```csharp
public TranslateTerminologyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a>

---

##### `TargetLanguageCodes`<sup>Required</sup> <a name="TargetLanguageCodes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes"></a>

```csharp
public string[] TargetLanguageCodes { get; }
```

- *Type:* string[]

---

##### `TermCount`<sup>Required</sup> <a name="TermCount" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount"></a>

```csharp
public double TermCount { get; }
```

- *Type:* double

---

##### `TerminologyData`<sup>Required</sup> <a name="TerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData"></a>

```csharp
public TranslateTerminologyTerminologyDataOutputReference TerminologyData { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput"></a>

```csharp
public IResolvable|TranslateTerminologyEncryptionKey EncryptionKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `MergeStrategyInput`<sup>Optional</sup> <a name="MergeStrategyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput"></a>

```csharp
public string MergeStrategyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput"></a>

```csharp
public IResolvable|TranslateTerminologyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---

##### `TerminologyDataInput`<sup>Optional</sup> <a name="TerminologyDataInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput"></a>

```csharp
public IResolvable|TranslateTerminologyTerminologyData TerminologyDataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MergeStrategy`<sup>Required</sup> <a name="MergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy"></a>

```csharp
public string MergeStrategy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranslateTerminologyConfig <a name="TranslateTerminologyConfig" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    TranslateTerminologyEncryptionKey EncryptionKey = null,
    string MergeStrategy = null,
    IResolvable|TranslateTerminologyTags[] Tags = null,
    TranslateTerminologyTerminologyData TerminologyData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name">Name</a></code> | <code>string</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description">Description</a></code> | <code>string</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy">MergeStrategy</a></code> | <code>string</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData">TerminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey"></a>

```csharp
public TranslateTerminologyEncryptionKey EncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `MergeStrategy`<sup>Optional</sup> <a name="MergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy"></a>

```csharp
public string MergeStrategy { get; set; }
```

- *Type:* string

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags"></a>

```csharp
public IResolvable|TranslateTerminologyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `TerminologyData`<sup>Optional</sup> <a name="TerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData"></a>

```csharp
public TranslateTerminologyTerminologyData TerminologyData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

### TranslateTerminologyEncryptionKey <a name="TranslateTerminologyEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyEncryptionKey {
    string Id = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id">Id</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the encryption key. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type">Type</a></code> | <code>string</code> | The type of encryption key. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#id TranslateTerminology#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#type TranslateTerminology#type}

---

### TranslateTerminologyTags <a name="TranslateTerminologyTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#key TranslateTerminology#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#value TranslateTerminology#value}

---

### TranslateTerminologyTerminologyData <a name="TranslateTerminologyTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyTerminologyData {
    string Directionality = null,
    string File = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality">Directionality</a></code> | <code>string</code> | The directionality of the terminology resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file">File</a></code> | <code>string</code> | The file containing the custom terminology data, base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format">Format</a></code> | <code>string</code> | The data format of the custom terminology. |

---

##### `Directionality`<sup>Optional</sup> <a name="Directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality"></a>

```csharp
public string Directionality { get; set; }
```

- *Type:* string

The directionality of the terminology resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#directionality TranslateTerminology#directionality}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

The file containing the custom terminology data, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#file TranslateTerminology#file}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The data format of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#format TranslateTerminology#format}

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateTerminologyEncryptionKeyOutputReference <a name="TranslateTerminologyEncryptionKeyOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranslateTerminologyEncryptionKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---


### TranslateTerminologyTagsList <a name="TranslateTerminologyTagsList" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get"></a>

```csharp
private TranslateTerminologyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue"></a>

```csharp
public IResolvable|TranslateTerminologyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---


### TranslateTerminologyTagsOutputReference <a name="TranslateTerminologyTagsOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranslateTerminologyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>

---


### TranslateTerminologyTerminologyDataOutputReference <a name="TranslateTerminologyTerminologyDataOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranslateTerminologyTerminologyDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality">ResetDirectionality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectionality` <a name="ResetDirectionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality"></a>

```csharp
private void ResetDirectionality()
```

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput">DirectionalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality">Directionality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionalityInput`<sup>Optional</sup> <a name="DirectionalityInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput"></a>

```csharp
public string DirectionalityInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `Directionality`<sup>Required</sup> <a name="Directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality"></a>

```csharp
public string Directionality { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranslateTerminologyTerminologyData InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---



