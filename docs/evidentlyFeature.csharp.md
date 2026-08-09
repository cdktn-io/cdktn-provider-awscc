# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktn/provider-awscc.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature awscc_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeature(Construct Scope, string Id, EvidentlyFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides">PutEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">ResetDefaultVariation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">ResetEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">ResetEvaluationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityOverrides` <a name="PutEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides"></a>

```csharp
private void PutEntityOverrides(IResolvable|EvidentlyFeatureEntityOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags"></a>

```csharp
private void PutTags(IResolvable|EvidentlyFeatureTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---

##### `PutVariations` <a name="PutVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```csharp
private void PutVariations(IResolvable|EvidentlyFeatureVariations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---

##### `ResetDefaultVariation` <a name="ResetDefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```csharp
private void ResetDefaultVariation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEntityOverrides` <a name="ResetEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```csharp
private void ResetEntityOverrides()
```

##### `ResetEvaluationStrategy` <a name="ResetEvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```csharp
private void ResetEvaluationStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvidentlyFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvidentlyFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides">EntityOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations">Variations</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">DefaultVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">EntityOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">EvaluationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput">VariationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation">DefaultVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EntityOverrides`<sup>Required</sup> <a name="EntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```csharp
public EvidentlyFeatureEntityOverridesList EntityOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```csharp
public EvidentlyFeatureTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a>

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```csharp
public EvidentlyFeatureVariationsList Variations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `DefaultVariationInput`<sup>Optional</sup> <a name="DefaultVariationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```csharp
public string DefaultVariationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EntityOverridesInput`<sup>Optional</sup> <a name="EntityOverridesInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```csharp
public IResolvable|EvidentlyFeatureEntityOverrides[] EntityOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---

##### `EvaluationStrategyInput`<sup>Optional</sup> <a name="EvaluationStrategyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```csharp
public string EvaluationStrategyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```csharp
public IResolvable|EvidentlyFeatureTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```csharp
public IResolvable|EvidentlyFeatureVariations[] VariationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---

##### `DefaultVariation`<sup>Required</sup> <a name="DefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```csharp
public string DefaultVariation { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EvaluationStrategy`<sup>Required</sup> <a name="EvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```csharp
public string EvaluationStrategy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Project,
    IResolvable|EvidentlyFeatureVariations[] Variations,
    string DefaultVariation = null,
    string Description = null,
    IResolvable|EvidentlyFeatureEntityOverrides[] EntityOverrides = null,
    string EvaluationStrategy = null,
    IResolvable|EvidentlyFeatureTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations">Variations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">DefaultVariation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">EntityOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#name EvidentlyFeature#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#project EvidentlyFeature#project}.

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```csharp
public IResolvable|EvidentlyFeatureVariations[] Variations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}.

---

##### `DefaultVariation`<sup>Optional</sup> <a name="DefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```csharp
public string DefaultVariation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#description EvidentlyFeature#description}.

---

##### `EntityOverrides`<sup>Optional</sup> <a name="EntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```csharp
public IResolvable|EvidentlyFeatureEntityOverrides[] EntityOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `EvaluationStrategy`<sup>Optional</sup> <a name="EvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```csharp
public string EvaluationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```csharp
public IResolvable|EvidentlyFeatureTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#tags EvidentlyFeature#tags}

---

### EvidentlyFeatureEntityOverrides <a name="EvidentlyFeatureEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureEntityOverrides {
    string EntityId = null,
    string Variation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation">Variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}.

---

##### `Variation`<sup>Optional</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation"></a>

```csharp
public string Variation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}.

---

### EvidentlyFeatureTags <a name="EvidentlyFeatureTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#key EvidentlyFeature#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureVariations {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    double LongValue = null,
    string StringValue = null,
    string VariationName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue">DoubleValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue">LongValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName">VariationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue"></a>

```csharp
public double LongValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}.

---

##### `VariationName`<sup>Optional</sup> <a name="VariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName"></a>

```csharp
public string VariationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEntityOverridesList <a name="EvidentlyFeatureEntityOverridesList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureEntityOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get"></a>

```csharp
private EvidentlyFeatureEntityOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureEntityOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---


### EvidentlyFeatureEntityOverridesOutputReference <a name="EvidentlyFeatureEntityOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureEntityOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation">ResetVariation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetVariation` <a name="ResetVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation"></a>

```csharp
private void ResetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput">VariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation">Variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput"></a>

```csharp
public string VariationInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation"></a>

```csharp
public string Variation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureEntityOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>

---


### EvidentlyFeatureTagsList <a name="EvidentlyFeatureTagsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get"></a>

```csharp
private EvidentlyFeatureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---


### EvidentlyFeatureTagsOutputReference <a name="EvidentlyFeatureTagsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureVariationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```csharp
private EvidentlyFeatureVariationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureVariations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyFeatureVariationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName">ResetVariationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue"></a>

```csharp
private void ResetLongValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```

##### `ResetVariationName` <a name="ResetVariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName"></a>

```csharp
private void ResetVariationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput">LongValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput">VariationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue">LongValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName">VariationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput"></a>

```csharp
public double LongValueInput { get; }
```

- *Type:* double

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `VariationNameInput`<sup>Optional</sup> <a name="VariationNameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput"></a>

```csharp
public string VariationNameInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue"></a>

```csharp
public double LongValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `VariationName`<sup>Required</sup> <a name="VariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName"></a>

```csharp
public string VariationName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyFeatureVariations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>

---



