# `appconfigExperimentRun` Submodule <a name="`appconfigExperimentRun` Submodule" id="@cdktn/provider-awscc.appconfigExperimentRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentRun <a name="AppconfigExperimentRun" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run awscc_appconfig_experiment_run}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRun(Construct Scope, string Id, AppconfigExperimentRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig">AppconfigExperimentRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig">AppconfigExperimentRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides">PutTreatmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides">ResetTreatmentOverrides</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags"></a>

```csharp
private void PutTags(IResolvable|AppconfigExperimentRunTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]

---

##### `PutTreatmentOverrides` <a name="PutTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides"></a>

```csharp
private void PutTreatmentOverrides(AppconfigExperimentRunTreatmentOverrides Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTreatmentOverrides` <a name="ResetTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides"></a>

```csharp
private void ResetTreatmentOverrides()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigExperimentRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigExperimentRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId">ExperimentDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run">Run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides">TreatmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput">ExperimentDefinitionIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput">ExposurePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput">TreatmentOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier">ExperimentDefinitionIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage">ExposurePercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ExperimentDefinitionId`<sup>Required</sup> <a name="ExperimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId"></a>

```csharp
public string ExperimentDefinitionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run"></a>

```csharp
public string Run { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags"></a>

```csharp
public AppconfigExperimentRunTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a>

---

##### `TreatmentOverrides`<sup>Required</sup> <a name="TreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides"></a>

```csharp
public AppconfigExperimentRunTreatmentOverridesOutputReference TreatmentOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput"></a>

```csharp
public string ApplicationIdentifierInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentDefinitionIdentifierInput`<sup>Optional</sup> <a name="ExperimentDefinitionIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput"></a>

```csharp
public string ExperimentDefinitionIdentifierInput { get; }
```

- *Type:* string

---

##### `ExposurePercentageInput`<sup>Optional</sup> <a name="ExposurePercentageInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput"></a>

```csharp
public double ExposurePercentageInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput"></a>

```csharp
public IResolvable|AppconfigExperimentRunTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]

---

##### `TreatmentOverridesInput`<sup>Optional</sup> <a name="TreatmentOverridesInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput"></a>

```csharp
public IResolvable|AppconfigExperimentRunTreatmentOverrides TreatmentOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExperimentDefinitionIdentifier`<sup>Required</sup> <a name="ExperimentDefinitionIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier"></a>

```csharp
public string ExperimentDefinitionIdentifier { get; }
```

- *Type:* string

---

##### `ExposurePercentage`<sup>Required</sup> <a name="ExposurePercentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage"></a>

```csharp
public double ExposurePercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentRunConfig <a name="AppconfigExperimentRunConfig" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationIdentifier,
    string ExperimentDefinitionIdentifier,
    double ExposurePercentage,
    string Description = null,
    IResolvable|AppconfigExperimentRunTags[] Tags = null,
    AppconfigExperimentRunTreatmentOverrides TreatmentOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | The application name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier">ExperimentDefinitionIdentifier</a></code> | <code>string</code> | The experiment definition name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage">ExposurePercentage</a></code> | <code>double</code> | Percentage of traffic exposed to the experiment (0-100). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description">Description</a></code> | <code>string</code> | Description of the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]</code> | Tags to associate with the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides">TreatmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | Treatment overrides for specific entities. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; set; }
```

- *Type:* string

The application name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#application_identifier AppconfigExperimentRun#application_identifier}

---

##### `ExperimentDefinitionIdentifier`<sup>Required</sup> <a name="ExperimentDefinitionIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier"></a>

```csharp
public string ExperimentDefinitionIdentifier { get; set; }
```

- *Type:* string

The experiment definition name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier AppconfigExperimentRun#experiment_definition_identifier}

---

##### `ExposurePercentage`<sup>Required</sup> <a name="ExposurePercentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage"></a>

```csharp
public double ExposurePercentage { get; set; }
```

- *Type:* double

Percentage of traffic exposed to the experiment (0-100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#exposure_percentage AppconfigExperimentRun#exposure_percentage}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#description AppconfigExperimentRun#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags"></a>

```csharp
public IResolvable|AppconfigExperimentRunTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]

Tags to associate with the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#tags AppconfigExperimentRun#tags}

---

##### `TreatmentOverrides`<sup>Optional</sup> <a name="TreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides"></a>

```csharp
public AppconfigExperimentRunTreatmentOverrides TreatmentOverrides { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

Treatment overrides for specific entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#treatment_overrides AppconfigExperimentRun#treatment_overrides}

---

### AppconfigExperimentRunTags <a name="AppconfigExperimentRunTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#key AppconfigExperimentRun#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#value AppconfigExperimentRun#value}

---

### AppconfigExperimentRunTreatmentOverrides <a name="AppconfigExperimentRunTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunTreatmentOverrides {
    System.Collections.Generic.IDictionary<string, string> Inline = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline">Inline</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of entity ID to treatment key (t1, t2, ..., or c for control). |

---

##### `Inline`<sup>Optional</sup> <a name="Inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Inline { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of entity ID to treatment key (t1, t2, ..., or c for control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#inline AppconfigExperimentRun#inline}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentRunTagsList <a name="AppconfigExperimentRunTagsList" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get"></a>

```csharp
private AppconfigExperimentRunTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentRunTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>[]

---


### AppconfigExperimentRunTagsOutputReference <a name="AppconfigExperimentRunTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentRunTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>

---


### AppconfigExperimentRunTreatmentOverridesOutputReference <a name="AppconfigExperimentRunTreatmentOverridesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentRunTreatmentOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline">ResetInline</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInline` <a name="ResetInline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline"></a>

```csharp
private void ResetInline()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput">InlineInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline">Inline</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InlineInput`<sup>Optional</sup> <a name="InlineInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InlineInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Inline { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentRunTreatmentOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---



