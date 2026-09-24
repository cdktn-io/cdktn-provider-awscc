# `transcribeCallAnalyticsCategory` Submodule <a name="`transcribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeCallAnalyticsCategory <a name="TranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategory(Construct Scope, string Id, TranscribeCallAnalyticsCategoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType">ResetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules"></a>

```csharp
private void PutRules(IResolvable|TranscribeCallAnalyticsCategoryRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags"></a>

```csharp
private void PutTags(IResolvable|TranscribeCallAnalyticsCategoryTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---

##### `ResetInputType` <a name="ResetInputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType"></a>

```csharp
private void ResetInputType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranscribeCallAnalyticsCategory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranscribeCallAnalyticsCategory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranscribeCallAnalyticsCategory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TranscribeCallAnalyticsCategory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput">CategoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput">InputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName">CategoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType">InputType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags"></a>

```csharp
public TranscribeCallAnalyticsCategoryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a>

---

##### `CategoryNameInput`<sup>Optional</sup> <a name="CategoryNameInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput"></a>

```csharp
public string CategoryNameInput { get; }
```

- *Type:* string

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput"></a>

```csharp
public string InputTypeInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName"></a>

```csharp
public string CategoryName { get; }
```

- *Type:* string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType"></a>

```csharp
public string InputType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallAnalyticsCategoryConfig <a name="TranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CategoryName,
    IResolvable|TranscribeCallAnalyticsCategoryRules[] Rules,
    string InputType = null,
    IResolvable|TranscribeCallAnalyticsCategoryTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName">CategoryName</a></code> | <code>string</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType">InputType</a></code> | <code>string</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | Tags associated with the Call Analytics category. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName"></a>

```csharp
public string CategoryName { get; set; }
```

- *Type:* string

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `InputType`<sup>Optional</sup> <a name="InputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType"></a>

```csharp
public string InputType { get; set; }
```

- *Type:* string

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

### TranscribeCallAnalyticsCategoryRules <a name="TranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRules {
    TranscribeCallAnalyticsCategoryRulesInterruptionFilter InterruptionFilter = null,
    TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter NonTalkTimeFilter = null,
    TranscribeCallAnalyticsCategoryRulesSentimentFilter SentimentFilter = null,
    TranscribeCallAnalyticsCategoryRulesTranscriptFilter TranscriptFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}. |

---

##### `InterruptionFilter`<sup>Optional</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilter InterruptionFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}.

---

##### `NonTalkTimeFilter`<sup>Optional</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter NonTalkTimeFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}.

---

##### `SentimentFilter`<sup>Optional</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilter SentimentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}.

---

##### `TranscriptFilter`<sup>Optional</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilter TranscriptFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilter {
    TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange AbsoluteTimeRange = null,
    bool|IResolvable Negate = null,
    string ParticipantRole = null,
    TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange RelativeTimeRange = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole">ParticipantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange AbsoluteTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole"></a>

```csharp
public string ParticipantRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange RelativeTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {
    double EndTime = null,
    double First = null,
    double Last = null,
    double StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime"></a>

```csharp
public double EndTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime"></a>

```csharp
public double StartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {
    double EndPercentage = null,
    double First = null,
    double Last = null,
    double StartPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage"></a>

```csharp
public double EndPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage"></a>

```csharp
public double StartPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {
    TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange AbsoluteTimeRange = null,
    bool|IResolvable Negate = null,
    TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange RelativeTimeRange = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange AbsoluteTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange RelativeTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {
    double EndTime = null,
    double First = null,
    double Last = null,
    double StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime"></a>

```csharp
public double EndTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime"></a>

```csharp
public double StartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {
    double EndPercentage = null,
    double First = null,
    double Last = null,
    double StartPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage"></a>

```csharp
public double EndPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage"></a>

```csharp
public double StartPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilter {
    TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange AbsoluteTimeRange = null,
    bool|IResolvable Negate = null,
    string ParticipantRole = null,
    TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange RelativeTimeRange = null,
    string[] Sentiments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole">ParticipantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments">Sentiments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange AbsoluteTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole"></a>

```csharp
public string ParticipantRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange RelativeTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Sentiments`<sup>Optional</sup> <a name="Sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments"></a>

```csharp
public string[] Sentiments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {
    double EndTime = null,
    double First = null,
    double Last = null,
    double StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime"></a>

```csharp
public double EndTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime"></a>

```csharp
public double StartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {
    double EndPercentage = null,
    double First = null,
    double Last = null,
    double StartPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage"></a>

```csharp
public double EndPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage"></a>

```csharp
public double StartPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilter {
    TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange AbsoluteTimeRange = null,
    bool|IResolvable Negate = null,
    string ParticipantRole = null,
    TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange RelativeTimeRange = null,
    string[] Targets = null,
    string TranscriptFilterType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole">ParticipantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets">Targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange AbsoluteTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole"></a>

```csharp
public string ParticipantRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange RelativeTimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

##### `TranscriptFilterType`<sup>Optional</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType"></a>

```csharp
public string TranscriptFilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {
    double EndTime = null,
    double First = null,
    double Last = null,
    double StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime"></a>

```csharp
public double EndTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime"></a>

```csharp
public double StartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {
    double EndPercentage = null,
    double First = null,
    double Last = null,
    double StartPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first">First</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last">Last</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage"></a>

```csharp
public double EndPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage"></a>

```csharp
public double StartPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryTags <a name="TranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public double EndTimeInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public double StartTimeInput { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange"></a>

```csharp
private void PutAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange"></a>

```csharp
private void PutRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange"></a>

```csharp
private void ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole"></a>

```csharp
private void ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange"></a>

```csharp
private void ResetRelativeTimeRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange AbsoluteTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput"></a>

```csharp
public bool|IResolvable NegateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput"></a>

```csharp
public string ParticipantRoleInput { get; }
```

- *Type:* string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange RelativeTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```csharp
private void ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```csharp
private void ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```csharp
public double EndPercentageInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```csharp
public double StartPercentageInput { get; }
```

- *Type:* double

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesList <a name="TranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get"></a>

```csharp
private TranscribeCallAnalyticsCategoryRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public double EndTimeInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public double StartTimeInput { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange"></a>

```csharp
private void PutAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange"></a>

```csharp
private void PutRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange"></a>

```csharp
private void ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange"></a>

```csharp
private void ResetRelativeTimeRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange AbsoluteTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput"></a>

```csharp
public bool|IResolvable NegateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange RelativeTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```csharp
private void ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```csharp
private void ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```csharp
public double EndPercentageInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```csharp
public double StartPercentageInput { get; }
```

- *Type:* double

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesOutputReference <a name="TranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter">PutInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter">PutNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter">PutSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter">PutTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter">ResetInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter">ResetNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter">ResetSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter">ResetTranscriptFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterruptionFilter` <a name="PutInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter"></a>

```csharp
private void PutInterruptionFilter(TranscribeCallAnalyticsCategoryRulesInterruptionFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `PutNonTalkTimeFilter` <a name="PutNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter"></a>

```csharp
private void PutNonTalkTimeFilter(TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `PutSentimentFilter` <a name="PutSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter"></a>

```csharp
private void PutSentimentFilter(TranscribeCallAnalyticsCategoryRulesSentimentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `PutTranscriptFilter` <a name="PutTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter"></a>

```csharp
private void PutTranscriptFilter(TranscribeCallAnalyticsCategoryRulesTranscriptFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `ResetInterruptionFilter` <a name="ResetInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter"></a>

```csharp
private void ResetInterruptionFilter()
```

##### `ResetNonTalkTimeFilter` <a name="ResetNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter"></a>

```csharp
private void ResetNonTalkTimeFilter()
```

##### `ResetSentimentFilter` <a name="ResetSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter"></a>

```csharp
private void ResetSentimentFilter()
```

##### `ResetTranscriptFilter` <a name="ResetTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter"></a>

```csharp
private void ResetTranscriptFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput">InterruptionFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput">NonTalkTimeFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput">SentimentFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput">TranscriptFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterruptionFilter`<sup>Required</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference InterruptionFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `NonTalkTimeFilter`<sup>Required</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference NonTalkTimeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `SentimentFilter`<sup>Required</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference SentimentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `TranscriptFilter`<sup>Required</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference TranscriptFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `InterruptionFilterInput`<sup>Optional</sup> <a name="InterruptionFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesInterruptionFilter InterruptionFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `NonTalkTimeFilterInput`<sup>Optional</sup> <a name="NonTalkTimeFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter NonTalkTimeFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `SentimentFilterInput`<sup>Optional</sup> <a name="SentimentFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilter SentimentFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `TranscriptFilterInput`<sup>Optional</sup> <a name="TranscriptFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilter TranscriptFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public double EndTimeInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public double StartTimeInput { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments">ResetSentiments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange"></a>

```csharp
private void PutAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange"></a>

```csharp
private void PutRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange"></a>

```csharp
private void ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole"></a>

```csharp
private void ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange"></a>

```csharp
private void ResetRelativeTimeRange()
```

##### `ResetSentiments` <a name="ResetSentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments"></a>

```csharp
private void ResetSentiments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput">SentimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">Sentiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange AbsoluteTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput"></a>

```csharp
public bool|IResolvable NegateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput"></a>

```csharp
public string ParticipantRoleInput { get; }
```

- *Type:* string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange RelativeTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `SentimentsInput`<sup>Optional</sup> <a name="SentimentsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput"></a>

```csharp
public string[] SentimentsInput { get; }
```

- *Type:* string[]

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `Sentiments`<sup>Required</sup> <a name="Sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```csharp
public string[] Sentiments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```csharp
private void ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```csharp
private void ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```csharp
public double EndPercentageInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```csharp
public double StartPercentageInput { get; }
```

- *Type:* double

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public double EndTimeInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public double StartTimeInput { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType">ResetTranscriptFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange"></a>

```csharp
private void PutAbsoluteTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange"></a>

```csharp
private void PutRelativeTimeRange(TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange"></a>

```csharp
private void ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole"></a>

```csharp
private void ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange"></a>

```csharp
private void ResetRelativeTimeRange()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetTranscriptFilterType` <a name="ResetTranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType"></a>

```csharp
private void ResetTranscriptFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput">TranscriptFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange AbsoluteTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput"></a>

```csharp
public bool|IResolvable NegateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput"></a>

```csharp
public string ParticipantRoleInput { get; }
```

- *Type:* string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange RelativeTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `TranscriptFilterTypeInput`<sup>Optional</sup> <a name="TranscriptFilterTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput"></a>

```csharp
public string TranscriptFilterTypeInput { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TranscriptFilterType`<sup>Required</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```csharp
public string TranscriptFilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```csharp
private void ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```csharp
private void ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```csharp
public double EndPercentageInput { get; }
```

- *Type:* double

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```csharp
public double StartPercentageInput { get; }
```

- *Type:* double

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryTagsList <a name="TranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get"></a>

```csharp
private TranscribeCallAnalyticsCategoryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---


### TranscribeCallAnalyticsCategoryTagsOutputReference <a name="TranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TranscribeCallAnalyticsCategoryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeCallAnalyticsCategoryTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>

---



