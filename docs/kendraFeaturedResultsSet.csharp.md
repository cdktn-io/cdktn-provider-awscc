# `kendraFeaturedResultsSet` Submodule <a name="`kendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.kendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraFeaturedResultsSet <a name="KendraFeaturedResultsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSet(Construct Scope, string Id, KendraFeaturedResultsSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments">PutFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments">ResetFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts">ResetQueryTexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeaturedDocuments` <a name="PutFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments"></a>

```csharp
private void PutFeaturedDocuments(IResolvable|KendraFeaturedResultsSetFeaturedDocuments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags"></a>

```csharp
private void PutTags(IResolvable|KendraFeaturedResultsSetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFeaturedDocuments` <a name="ResetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments"></a>

```csharp
private void ResetFeaturedDocuments()
```

##### `ResetQueryTexts` <a name="ResetQueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts"></a>

```csharp
private void ResetQueryTexts()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KendraFeaturedResultsSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KendraFeaturedResultsSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KendraFeaturedResultsSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KendraFeaturedResultsSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KendraFeaturedResultsSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments">FeaturedDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId">FeaturedResultsSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput">FeaturedDocumentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput">FeaturedResultsSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput">QueryTextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName">FeaturedResultsSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts">QueryTexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FeaturedDocuments`<sup>Required</sup> <a name="FeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments"></a>

```csharp
public KendraFeaturedResultsSetFeaturedDocumentsList FeaturedDocuments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `FeaturedResultsSetId`<sup>Required</sup> <a name="FeaturedResultsSetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```csharp
public string FeaturedResultsSetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags"></a>

```csharp
public KendraFeaturedResultsSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FeaturedDocumentsInput`<sup>Optional</sup> <a name="FeaturedDocumentsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetFeaturedDocuments[] FeaturedDocumentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---

##### `FeaturedResultsSetNameInput`<sup>Optional</sup> <a name="FeaturedResultsSetNameInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput"></a>

```csharp
public string FeaturedResultsSetNameInput { get; }
```

- *Type:* string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `QueryTextsInput`<sup>Optional</sup> <a name="QueryTextsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput"></a>

```csharp
public string[] QueryTextsInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FeaturedResultsSetName`<sup>Required</sup> <a name="FeaturedResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```csharp
public string FeaturedResultsSetName { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `QueryTexts`<sup>Required</sup> <a name="QueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts"></a>

```csharp
public string[] QueryTexts { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraFeaturedResultsSetConfig <a name="KendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FeaturedResultsSetName,
    string IndexId,
    string Description = null,
    IResolvable|KendraFeaturedResultsSetFeaturedDocuments[] FeaturedDocuments = null,
    string[] QueryTexts = null,
    string Status = null,
    IResolvable|KendraFeaturedResultsSetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName">FeaturedResultsSetName</a></code> | <code>string</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId">IndexId</a></code> | <code>string</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description">Description</a></code> | <code>string</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments">FeaturedDocuments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts">QueryTexts</a></code> | <code>string[]</code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status">Status</a></code> | <code>string</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FeaturedResultsSetName`<sup>Required</sup> <a name="FeaturedResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName"></a>

```csharp
public string FeaturedResultsSetName { get; set; }
```

- *Type:* string

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `FeaturedDocuments`<sup>Optional</sup> <a name="FeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetFeaturedDocuments[] FeaturedDocuments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `QueryTexts`<sup>Optional</sup> <a name="QueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts"></a>

```csharp
public string[] QueryTexts { get; set; }
```

- *Type:* string[]

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

### KendraFeaturedResultsSetFeaturedDocuments <a name="KendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetFeaturedDocuments {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id">Id</a></code> | <code>string</code> | The identifier of the document to feature in the search results. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier of the document to feature in the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### KendraFeaturedResultsSetTags <a name="KendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key">Key</a></code> | <code>string</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value">Value</a></code> | <code>string</code> | The value associated with the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraFeaturedResultsSetFeaturedDocumentsList <a name="KendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetFeaturedDocumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```csharp
private KendraFeaturedResultsSetFeaturedDocumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetFeaturedDocuments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---


### KendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="KendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetFeaturedDocumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetFeaturedDocuments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>

---


### KendraFeaturedResultsSetTagsList <a name="KendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get"></a>

```csharp
private KendraFeaturedResultsSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---


### KendraFeaturedResultsSetTagsOutputReference <a name="KendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KendraFeaturedResultsSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KendraFeaturedResultsSetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>

---



