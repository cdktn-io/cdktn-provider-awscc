# `cleanroomsPrivacyBudgetTemplate` Submodule <a name="`cleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsPrivacyBudgetTemplate <a name="CleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplate(Construct Scope, string Id, CleanroomsPrivacyBudgetTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters"></a>

```csharp
private void PutParameters(CleanroomsPrivacyBudgetTemplateParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsPrivacyBudgetTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsPrivacyBudgetTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsPrivacyBudgetTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsPrivacyBudgetTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsPrivacyBudgetTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsPrivacyBudgetTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn">MembershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">PrivacyBudgetTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput">PrivacyBudgetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">PrivacyBudgetType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```csharp
public string MembershipArn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```csharp
public CleanroomsPrivacyBudgetTemplateParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `PrivacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="PrivacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```csharp
public string PrivacyBudgetTemplateIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags"></a>

```csharp
public CleanroomsPrivacyBudgetTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput"></a>

```csharp
public string AutoRefreshInput { get; }
```

- *Type:* string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput"></a>

```csharp
public string MembershipIdentifierInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParameters ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `PrivacyBudgetTypeInput`<sup>Optional</sup> <a name="PrivacyBudgetTypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput"></a>

```csharp
public string PrivacyBudgetTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `PrivacyBudgetType`<sup>Required</sup> <a name="PrivacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```csharp
public string PrivacyBudgetType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsPrivacyBudgetTemplateConfig <a name="CleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoRefresh,
    string MembershipIdentifier,
    CleanroomsPrivacyBudgetTemplateParameters Parameters,
    string PrivacyBudgetType,
    IResolvable|CleanroomsPrivacyBudgetTemplateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType">PrivacyBudgetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters"></a>

```csharp
public CleanroomsPrivacyBudgetTemplateParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `PrivacyBudgetType`<sup>Required</sup> <a name="PrivacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType"></a>

```csharp
public string PrivacyBudgetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

### CleanroomsPrivacyBudgetTemplateParameters <a name="CleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateParameters {
    IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[] BudgetParameters = null,
    double Epsilon = null,
    string ResourceArn = null,
    double UsersNoisePerQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters">BudgetParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon">Epsilon</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery">UsersNoisePerQuery</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}. |

---

##### `BudgetParameters`<sup>Optional</sup> <a name="BudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[] BudgetParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

##### `Epsilon`<sup>Optional</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon"></a>

```csharp
public double Epsilon { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

##### `UsersNoisePerQuery`<sup>Optional</sup> <a name="UsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery"></a>

```csharp
public double UsersNoisePerQuery { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

### CleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateParametersBudgetParameters {
    string AutoRefresh = null,
    double Budget = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget">Budget</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}. |

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `Budget`<sup>Optional</sup> <a name="Budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget"></a>

```csharp
public double Budget { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}.

---

### CleanroomsPrivacyBudgetTemplateTags <a name="CleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```csharp
private CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---


### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget">ResetBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh"></a>

```csharp
private void ResetAutoRefresh()
```

##### `ResetBudget` <a name="ResetBudget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget"></a>

```csharp
private void ResetBudget()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput">BudgetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">Budget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput"></a>

```csharp
public string AutoRefreshInput { get; }
```

- *Type:* string

---

##### `BudgetInput`<sup>Optional</sup> <a name="BudgetInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput"></a>

```csharp
public double BudgetInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; }
```

- *Type:* string

---

##### `Budget`<sup>Required</sup> <a name="Budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```csharp
public double Budget { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### CleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters">PutBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters">ResetBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon">ResetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery">ResetUsersNoisePerQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBudgetParameters` <a name="PutBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters"></a>

```csharp
private void PutBudgetParameters(IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---

##### `ResetBudgetParameters` <a name="ResetBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters"></a>

```csharp
private void ResetBudgetParameters()
```

##### `ResetEpsilon` <a name="ResetEpsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon"></a>

```csharp
private void ResetEpsilon()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetUsersNoisePerQuery` <a name="ResetUsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery"></a>

```csharp
private void ResetUsersNoisePerQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">BudgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput">BudgetParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput">EpsilonInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput">UsersNoisePerQueryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">Epsilon</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">UsersNoisePerQuery</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetParameters`<sup>Required</sup> <a name="BudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```csharp
public CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList BudgetParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `BudgetParametersInput`<sup>Optional</sup> <a name="BudgetParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[] BudgetParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---

##### `EpsilonInput`<sup>Optional</sup> <a name="EpsilonInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput"></a>

```csharp
public double EpsilonInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `UsersNoisePerQueryInput`<sup>Optional</sup> <a name="UsersNoisePerQueryInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput"></a>

```csharp
public double UsersNoisePerQueryInput { get; }
```

- *Type:* double

---

##### `Epsilon`<sup>Required</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```csharp
public double Epsilon { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `UsersNoisePerQuery`<sup>Required</sup> <a name="UsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```csharp
public double UsersNoisePerQuery { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---


### CleanroomsPrivacyBudgetTemplateTagsList <a name="CleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```csharp
private CleanroomsPrivacyBudgetTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---


### CleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="CleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsPrivacyBudgetTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsPrivacyBudgetTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>

---



