# `ssmquicksetupLifecycleAutomation` Submodule <a name="`ssmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupLifecycleAutomation <a name="SsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupLifecycleAutomation(Construct Scope, string Id, SsmquicksetupLifecycleAutomationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupLifecycleAutomation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupLifecycleAutomation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupLifecycleAutomation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupLifecycleAutomation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmquicksetupLifecycleAutomation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput">AutomationDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput">AutomationParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput">ResourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument">AutomationDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters">AutomationParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey">ResourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AutomationDocumentInput`<sup>Optional</sup> <a name="AutomationDocumentInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput"></a>

```csharp
public string AutomationDocumentInput { get; }
```

- *Type:* string

---

##### `AutomationParametersInput`<sup>Optional</sup> <a name="AutomationParametersInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> AutomationParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceKeyInput`<sup>Optional</sup> <a name="ResourceKeyInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput"></a>

```csharp
public string ResourceKeyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutomationDocument`<sup>Required</sup> <a name="AutomationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```csharp
public string AutomationDocument { get; }
```

- *Type:* string

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> AutomationParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```csharp
public string ResourceKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupLifecycleAutomationConfig <a name="SsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupLifecycleAutomationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutomationDocument,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> AutomationParameters,
    string ResourceKey,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument">AutomationDocument</a></code> | <code>string</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters">AutomationParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey">ResourceKey</a></code> | <code>string</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutomationDocument`<sup>Required</sup> <a name="AutomationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument"></a>

```csharp
public string AutomationDocument { get; set; }
```

- *Type:* string

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> AutomationParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey"></a>

```csharp
public string ResourceKey { get; set; }
```

- *Type:* string

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---



